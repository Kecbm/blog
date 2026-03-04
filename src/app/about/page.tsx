"use client";

import { useTranslation } from "@/src/hooks/useTranslation";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        {t.about.title}
      </h1>
      <article>
        <p>
          {t.about.paragraph1}{" "}
          <a
            href="https://pt.wikipedia.org/wiki/Garanhuns"
            className="about-highlight"
          >
            {t.about.garanhuns}
          </a>{t.about.paragraph1End}
        </p>
        <p>
          {t.about.paragraph2}{" "}
          <a
            href="https://www.facebook.com/share/p/1bCxoDSPSc/"
            className="about-highlight"
          >
            {t.about.orchestra}
          </a>.
        </p>
        <p>
          {t.about.paragraph3Start}{" "}
          <a
            href="https://www.instagram.com/engenhariadealimentos.ufape/"
            className="about-highlight"
          >
            {t.about.university}
          </a>{t.about.paragraph3End}
        </p>
        <p>
          {t.about.paragraph4Start}{" "}
          <a
            href="https://www.betrybe.com/"
            className="about-highlight"
          >
            {t.about.trybe}{" "}
          </a>{t.about.paragraph4Middle}{" "}
          <a
            href="https://www.infomoney.com.br/patrocinados/xp-investimentos/xp-inc-vai-formar-300-pessoas-em-curso-de-programacao-da-trybe/"
            className="about-highlight"
          >
            {t.about.xpClass}
          </a>{t.about.paragraph4Middle2}{" "}
          <a
            href="https://www.linkedin.com/posts/kecbm_tive-a-honra-de-ser-eleita-embaixatryber-activity-6905503717567598592-4Wrg?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACtMpX0BMkf2Xh5O6zP34bZB84vMCGPU1YY"
            className="about-highlight"
          >
            {t.about.ambassador}
          </a>{" "}{t.about.paragraph4Middle3}{" "}
          <a
            href="https://www.youtube.com/watch?v=Tonfpy4eQFY&list=PLw0GGb7tHTHv3gdy39NrOrLh7TrnqjUrL"
            className="about-highlight"
          >
            {t.about.beyondCode}
          </a>
        </p>
        <p>
          {t.about.paragraph5Start}{" "}
          <a
            href="https://dev.to/kecbm/como-participar-da-bolha-dev-no-twitter-um-guia-para-desenvolvedores-11ol"
            className="about-highlight"
          >
            {t.about.devBubble}
          </a>{t.about.paragraph5End}
        </p>
        <p>
          {t.about.paragraph6Start}{" "}
          <a
            href="https://g1.globo.com/tecnologia/noticia/2023/05/10/ja-incentivo-meus-filhos-comeco-pode-ser-frustrante-profissionais-contam-como-e-trabalhar-com-programacao.ghtml"
            className="about-highlight"
          >
            {t.about.globo}
          </a>{t.about.paragraph6End}
        </p>
        <p>
          {t.about.paragraph7Start}{" "}
          <a
            href="https://dev.to/kecbm"
            className="about-highlight"
          >
            {t.about.devCommunity}
          </a>{t.about.paragraph7End}
        </p>
        <p>
          {t.about.paragraph8Start}{" "}
          <a
            href="https://dev.to/kecbm/de-volta-ao-codigo-como-conquistei-minha-realocacao-no-mercado-de-tecnologia-4n5n"
            className="about-highlight"
          >
            {t.about.backToCode}
          </a>{t.about.paragraph8Middle}{" "}
          <a
            href="https://www.twitch.tv/videos/2435200518"
            className="about-highlight"
          >
            {t.about.githubBrasil}
          </a>.
        </p>
        <p>
          {t.about.paragraph9Start}{" "}
          <a
            href="/ps3"
            className="about-highlight"
          >
            {t.about.ps3}
          </a>{t.about.paragraph9Middle}{" "}
          <a
            href="https://www.strava.com/athletes/kecbm"
            className="about-highlight"
          >
            {t.about.bike}
          </a>{t.about.paragraph9Middle2}{" "}
          <a
            href="https://www.strava.com/athletes/kecbm"
            className="about-highlight"
          >
            {t.about.gym}
          </a>{t.about.paragraph9Middle3}{" "}
          <a
            href="/books"
            className="about-highlight"
          >
            {t.about.reading}
          </a>{t.about.paragraph9End}
        </p>
        <p>
          {t.about.paragraph10Start}{" "}
          <a
            href="https://x.com/kecbm"
            className="about-highlight"
          >
            {t.about.twitter}
          </a>{" "}{t.about.paragraph10Middle}{" "}
          <a
            href="mailto:kleciannymelo@gmail.com"
            className="about-highlight"
          >
            kleciannymelo@gmail.com
          </a>.
        </p>
        <p>{t.about.lifeIsGood}</p>
        <p>
          {t.about.best}
          <br />
          Klecianny
        </p>
      </article>
    </>
  );
}
