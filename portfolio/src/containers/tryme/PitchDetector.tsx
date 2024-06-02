"use client";

import { useEffect, useRef, useState } from "react";

interface PitchDetector {
  close: () => void;
}

const PitchDetector = ({ close }: PitchDetector) => {
  const [audioStream, setAudioStream] = useState<MediaStream | null>(null);
  const [valueToDisplay, setValueToDisplay] = useState<number>(0);
  const audioContextRef = useRef(new AudioContext());
  const analyserRef = useRef(audioContextRef.current.createAnalyser());
  const [on, setOn] = useState<boolean>(false);
  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      setAudioStream(stream);
      setOn(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };
  const handleStopRecording = () => {
    if (audioStream) {
      audioStream.getTracks().forEach((track) => {
        track.stop();
      });
      let audioTrack: MediaStreamTrack = audioStream.getAudioTracks()[0];
      audioStream.removeTrack(audioTrack);
      setAudioStream(null);
      setOn(false);
    }
  };

  useEffect(() => {
    let source: MediaStreamAudioSourceNode;
    if (audioStream) {
      source = audioContextRef.current.createMediaStreamSource(audioStream);
      source.connect(analyserRef.current);
      visualize();
    }
    return () => {
      if (source) {
        source.disconnect();
      }
    };
  }, [audioStream]);

  const visualize = () => {
    let previousValueToDisplay = 0;
    let smoothingCount = 0;
    let smoothingThreshold = 10;
    let smoothingCountThreshold = 5;

    const drawNote = () => {
      const drawVisual = requestAnimationFrame(drawNote);
      const bufferLength = analyserRef.current.fftSize;
      const buffer = new Float32Array(bufferLength);
      analyserRef.current.getFloatTimeDomainData(buffer);
      const autoCorrelateValue = autoCorrelate(
        buffer,
        audioContextRef.current.sampleRate
      );
      let valueToDisplay = autoCorrelateValue;
      valueToDisplay = Math.round(valueToDisplay);
      if (autoCorrelateValue < 60) {
        setValueToDisplay(0);
      }

      function noteIsSimilarEnough() {
        if (typeof valueToDisplay == "number") {
          return (
            Math.abs(valueToDisplay - previousValueToDisplay) <
            smoothingThreshold
          );
        } else {
          return valueToDisplay === previousValueToDisplay;
        }
      }
      if (noteIsSimilarEnough()) {
        if (smoothingCount < smoothingCountThreshold) {
          smoothingCount++;
          return;
        } else {
          previousValueToDisplay = valueToDisplay;
          smoothingCount = 0;
        }
      } else {
        previousValueToDisplay = valueToDisplay;
        smoothingCount = 0;
        return;
      }
      setValueToDisplay(valueToDisplay);
    };
    drawNote();
  };
  const autoCorrelate = (buffer: any, sampleRate: any) => {
    let SIZE = buffer.length;
    let sumOfSquares = 0;
    for (var i = 0; i < SIZE; i++) {
      var val = buffer[i];
      sumOfSquares += val * val;
    }
    let r1 = 0;
    let r2 = SIZE - 1;
    let threshold = 0.2;

    for (var i = 0; i < SIZE / 2; i++) {
      if (Math.abs(buffer[i]) < threshold) {
        r1 = i;
        break;
      }
    }

    for (var i = 1; i < SIZE / 2; i++) {
      if (Math.abs(buffer[SIZE - i]) < threshold) {
        r2 = SIZE - i;
        break;
      }
    }

    buffer = buffer.slice(r1, r2);
    SIZE = buffer.length;

    var c = new Array(SIZE).fill(0);
    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE - i; j++) {
        c[i] = c[i] + buffer[j] * buffer[j + i];
      }
    }

    var d = 0;
    while (c[d] > c[d + 1]) {
      d++;
    }

    var maxValue = -1;
    var maxIndex = -1;
    for (var i = d; i < SIZE; i++) {
      if (c[i] > maxValue) {
        maxValue = c[i];
        maxIndex = i;
      }
    }

    var T0 = maxIndex;

    var x1 = c[T0 - 1];
    var x2 = c[T0];
    var x3 = c[T0 + 1];

    var a = (x1 + x3 - 2 * x2) / 2;
    var b = (x3 - x1) / 2;
    if (a) {
      T0 = T0 - b / (2 * a);
    }

    return sampleRate / T0;
  };

  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 rounded-xl  border-2 dark:border-black bg-gray-900 text-white 3xl:w-1/6 2xl:w-1/4 lg:w-1/3 md:w-1/2 w-3/4 aspect-3/5">
        <div className="flex flex-col justify-between items-center h-full p-5 pb-10">
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-end">
              <span
                className="material-symbols-outlined cursor-pointer"
                onClick={() => {
                  close();
                  handleStopRecording();
                }}
              >
                close
              </span>
            </div>
            <div className="flex w-full justify-center text-xl">
              <span>음높이 : </span>
              <span className="text-skyblue">{valueToDisplay}</span>
              <span>Hz</span>
            </div>
          </div>
          <div className="h-[100px] flex gap-[12px] justify-center items-center">
            {/* <div className="w-[16px] h-[16px] bg-white rounded-[100px] animate-[loading1_1s_infinite_100ms]"></div>
            <div className="w-[16px] h-[16px] bg-white rounded-[100px] animate-[loading2_1s_infinite_100ms]"></div>
            <div className="w-[16px] h-[16px] bg-white rounded-[100px] animate-[loading3_1s_infinite_100ms]"></div> */}
          </div>
          <button className="flex w-3/4 justify-center p-2 bg-blue-700 rounded-xl text-lg font-bold">
            {on ? (
              <span onClick={handleStopRecording}>녹음 중지하기</span>
            ) : (
              <span onClick={handleStartRecording}>녹음 시작하기</span>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default PitchDetector;
