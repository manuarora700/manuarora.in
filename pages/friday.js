import Container from "@/components/Container";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Friday = () => {
  const [isFriday, setIsFriday] = useState(false);
  const router = useRouter();
  useEffect(() => {
    let day = new Date().getDay();

    if (day === 5) {
      setIsFriday(true);
      // redirect
      router.push("https://www.youtube.com/shorts/bmqtEdHq-dg");
    }
  }, []);

  return (
    <Container
      title="FRIDAY AAAAAAAA! KARAAAR HOJO | Manu Arora"
      description="Keda kaabu ni husan te paave, Dil seene to nikalda jaave, batti bor billo do nain kaale, PENCHO FRIDAY AAA, KARAAR HOJO KOKAIN HOOKARAN NAAL SAX SUX PHUDDIYAN PAADOOOOO!"
    >
      <div className="max-w-4xl mx-auto py-40">
        {!isFriday ? (
          <>
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              AAJ FRIDAY NAHI HAI! 😢
            </h1>
            <h3 className="font-normal text-sm md:text-base tracking-tight mb-4 mt-8 text-black dark:text-white">
              Come back on a Friday for a surprise. 👳🏻‍♂️
            </h3>
          </>
        ) : (
          <h1 className="font-bold text-3xl md:text-5xl tracking-wide leading-10 mb-4 text-black dark:text-white">
            Keda kaabu ni husan te paave, Dil seene to nikalda jaave, batti bor
            billo do nain kaale, PENCHO FRIDAY AAA, KARAAR HOJO KOKAIN HOOKARAN
            NAAL SAX SUX PHUDDIYAN PAADOOOOO!
          </h1>
        )}
      </div>
    </Container>
  );
};

export default Friday;
