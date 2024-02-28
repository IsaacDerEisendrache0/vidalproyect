import React from 'react';

const Carrucel = () => {
  return ( 
    <div>
        <h1 className='rainbow_text_animated'>Elije tu juego favorito para entrar en la paguina oficial</h1>
        <div class="containers">
        
        <div>
          <a href="https://es.bandainamcoent.eu/dragon-ball/dragon-ball-xenoverse-2" target="_blank" className="card-link">
            <div class="content">
              <h2>Dragon ball</h2>
              <span>Xenoverse 2</span>
            </div>
          </a>
        </div>
        <div>
          <a href="https://dragonball.fandom.com/es/wiki/Dragon_Ball_Z:_Budokai_Tenkaichi_3" target="_blank" className="card-link">
            <div class="content">
              <h2>Dragon ball</h2>
              <span>Budokai Tenkaichi 3</span>
            </div>
          </a>
        </div>
        <div>
          <a href="https://store.steampowered.com/app/678950/DRAGON_BALL_FighterZ/" target="_blank" className="card-link">
            <div class="content">
              <h2>Dragon ball</h2>
              <span>FighterZ</span>
            </div>
          </a>
        </div>
        <div>
          <a href="https://es.bandainamcoent.eu/dragon-ball/dragon-ball-sparking-zero" target="_blank" className="card-link">
            <div class="content">
              <h2>LDragon ball</h2>
              <span>Sparking! Zero</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Carrucel;
