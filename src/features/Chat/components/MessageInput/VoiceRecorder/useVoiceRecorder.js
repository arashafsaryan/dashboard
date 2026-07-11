import { useEffect, useRef, useState } from "react";

export default function useVoiceRecorder(isRecording) {
  const [level, setLevel] = useState(0);

  const analyserRef = useRef(null);
  const dataRef = useRef(null);
  const frameRef = useRef(null);
  const streamRef = useRef(null);
  const audioContextRef = useRef(null);

  useEffect(() => {
    if (!isRecording) return;

    let mounted = true;

    const start = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });

        streamRef.current = stream;

        const audioContext = new AudioContext();

        audioContextRef.current = audioContext;

        const source = audioContext.createMediaStreamSource(stream);

        const analyser = audioContext.createAnalyser();

        analyser.fftSize = 256;

        source.connect(analyser);

        analyserRef.current = analyser;

        const dataArray = new Uint8Array(analyser.frequencyBinCount);

        dataRef.current = dataArray;

        const animate = () => {
          if (!mounted) return;

          analyser.getByteFrequencyData(dataArray);

          const avg = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;

          setLevel(avg);

          frameRef.current = requestAnimationFrame(animate);
        };

        animate();
      } catch (err) {
        console.error(err);
      }
    };

    start();

    return () => {
      mounted = false;

      cancelAnimationFrame(frameRef.current);

      streamRef.current?.getTracks().forEach((track) => track.stop());

      audioContextRef.current?.close();
    };
  }, [isRecording]);

  return level;
}
