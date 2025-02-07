import React from "react";
import dataMusics from "../../components/data/data";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MusicCard } from "~~/components/musicCard";
import { Button } from "~~/components/ui/button";

export default function PlayList() {
  return (
    <section>
      <div>
        <div className="md:flex justify-between ">
          <h2>
            Descubrir <br /> Pistas y Más
          </h2>
          <div className="flex flex-wrap items-center md:self-end">
            <p className="mr-2">Género Músical</p>
            <Button size="xsmall">Rock</Button>
            <Button size="xsmall">Pop</Button>
            <Button size="xsmall">K-Pop</Button>
            <Button size="xsmall">Jazz</Button>
            <Button size="xsmall">Funk</Button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-20 mt-20">
          {dataMusics.map(music => {
            return (
              <MusicCard
                key={music.id}
                srcImg={music.srcImg}
                title={music.title}
                scroll={music.scroll}
                token={music.token}
              />
            );
          })}
        </div>
        <div className="flex justify-center mt-20">
          <Button>
            <span className="mr-2">Descubrir más música </span>
            <MdOutlineKeyboardArrowRight size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
}
