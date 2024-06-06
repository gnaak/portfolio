"use client";

import RangeCheckGuide from "./RangeCheckGuide";
import VoiceDetector from "./VoiceDetector";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import Timer from "./Timer";
import PitchDetector from "./PitchDetector";
import { convertHztoNote } from "./convert";
import ReadMore from "./Read";

interface RangeCheckPage {
  close: () => void;
}

const RangeCheckPage = ({ close }: RangeCheckPage) => {
  const GuidePhase = 0b00;
  const RecordingPhase = 0b01;
  const LoadingPhase = 0b10;
  const ResultPhase = 0b11;
  const [currentPhase, setCurrentPhase] = useState(GuidePhase);

  const [audioStream, setAudioStream] = useState<MediaStream | null>(null);
  const [pitchArray, setPitchArray] = useState<number[]>([]);
  const [minNoteName, setMinNoteName] = useState("");
  const [maxNoteName, setMaxNoteName] = useState("");

  const handleStartRecording = async () => {
    setCurrentPhase(RecordingPhase);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      setAudioStream(stream);
    } catch (error) {}
  };

  const [isTimeout, setIsTimeout] = useState<boolean>(false);
  const returnPage = () => {
    if (audioStream) {
      audioStream.getTracks().forEach((track) => {
        track.stop();
      });
      let audioTrack: MediaStreamTrack = audioStream.getAudioTracks()[0];
      audioStream.removeTrack(audioTrack);
      setAudioStream(null);
    }
    close();
  };
const handleStopRecording = () => {
  if (audioStream) {
    audioStream.getTracks().forEach((track) => {
      track.stop();
    });
    let audioTrack: MediaStreamTrack = audioStream.getAudioTracks()[0];
    audioStream.removeTrack(audioTrack);
    setAudioStream(null);
  }

  setCurrentPhase(LoadingPhase);
  const { minNoteName, maxNoteName } = convertHztoNote(pitchArray);
  if (pitchArray.length < 5) {
    alert('소음이 없는 환경에서 측정해주세요');
    setCurrentPhase(GuidePhase);
    return;
  }

  setMinNoteName(minNoteName);
  setMaxNoteName(maxNoteName);
};
  // isTimeout이 바뀌는 경우는 타이머 컴포넌트에서 20초가 지날 때 뿐
  useEffect(() => {
    if (isTimeout) {
      handleStopRecording();
    }
  }, [isTimeout]);

  useEffect(() => {
    if (currentPhase === LoadingPhase) {
      const timeoutId = setTimeout(() => {}, 1000);
      setCurrentPhase(ResultPhase);
      return () => clearTimeout(timeoutId);
    }
  }, [currentPhase]);

  return (
    <>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 rounded-xl  border-2 dark:border-black bg-gray-900 text-white lg:w-[400px] md:w-1/2 w-3/4 aspect-3/5">
        <div className="flex flex-col items-center h-full p-5 pb-0  ">
          <div className="flex flex-row justify-end w-full ">
            <span
              className="material-symbols-outlined cursor-pointer"
              onClick={() => {
                returnPage();
              }}
            >
              close
            </span>
          </div>
          {currentPhase === GuidePhase && (
            <>
              <main className="flex flex-col justify-between h-full items-center pb-10 ">
                <RangeCheckGuide></RangeCheckGuide>
                <div>
                  <button
                    className="bg-blue-700 rounded-xl p-3 font-bold px-5 text-bold "
                    onClick={handleStartRecording}
                  >
                    테스트 시작하기
                  </button>
                </div>
              </main>
            </>
          )}

          {currentPhase === RecordingPhase && (
            <>
              <main className="flex flex-col justify-between h-full w-full items-center pb-10 ">
                <Timer setIsTimeout={setIsTimeout} />

                <PitchDetector
                  audioStream={audioStream}
                  pitchArr={pitchArray}
                  updatePitchArray={(newPitchArray) => {
                    setPitchArray(newPitchArray);
                  }}
                ></PitchDetector>
                <VoiceDetector></VoiceDetector>
                <button
                  className="bg-blue-700 rounded-xl p-3 font-bold px-5 text-bold"
                  onClick={handleStopRecording}
                >
                  녹음 중지하기
                </button>
              </main>
            </>
          )}

          {currentPhase === LoadingPhase && (
            <>
              <main className="flex flex-col justify-evenly h-full w-full items-center">
                <Loader></Loader>
              </main>
            </>
          )}
          {currentPhase === ResultPhase && (
            <>
              <main className="flex flex-col justify-between h-full w-full items-center pb-10">
                <div className="flex flex-col items-center">
                  <span>당신의 음역대는</span>
                  <em className="text-blue-400 text-xl font-bold not-italic">
                    {minNoteName}&nbsp;~&nbsp;{maxNoteName}
                  </em>
                  <span>입니다.</span>
                </div>
                <ReadMore lowestNote={minNoteName} highestNote={maxNoteName} />
                <button
                  className="bg-blue-700 rounded-xl p-3 font-bold px-5 text-bold "
                  onClick={() => setCurrentPhase(GuidePhase)}
                >
                  재측청하러가기
                </button>
              </main>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default RangeCheckPage;
