import React from 'react'
import PropTypes from 'prop-types'
import iconbug from '../images/icon/bug.svg'
import icondark from '../images/icon/dark.svg'
import icondragon from '../images/icon/dragon.svg'
import iconelectric from '../images/icon/electric.svg'
import iconfairy from '../images/icon/fairy.svg'
import iconfighting from '../images/icon/fighting.svg'
import iconfire from '../images/icon/fire.svg'
import iconflying from '../images/icon/flying.svg'
import iconghost from '../images/icon/ghost.svg'
import icongrass from '../images/icon/grass.svg'
import iconground from '../images/icon/ground.svg'
import iconice from '../images/icon/ice.svg'
import iconnormal from '../images/icon/normal.svg'
import iconpoison from '../images/icon/poison.svg'
import iconpsychic from '../images/icon/psychic.svg'
import iconrock from '../images/icon/rock.svg'
import iconsteel from '../images/icon/steel.svg'
import iconwater from '../images/icon/water.svg'

function IconTypePokemon ({ typepokemon }) {
  return (
    <>
      <div className={`icon ${typepokemon} inline-block mx-2`}>
        <img src={iconbug} className={`${typepokemon !== 'bug' && 'hidden'}`} alt='' />
        <img src={icondark} className={`${typepokemon !== 'dark' && 'hidden'}`} alt='' />
        <img src={icondragon} className={`${typepokemon !== 'dragon' && 'hidden'}`} alt='' />
        <img src={iconelectric} className={`${typepokemon !== 'electric' && 'hidden'}`} alt='' />
        <img src={iconfairy} className={`${typepokemon !== 'fairy' && 'hidden'}`} alt='' />
        <img src={iconfighting} className={`${typepokemon !== 'fighting' && 'hidden'}`} alt='' />
        <img src={iconfire} className={`${typepokemon !== 'fire' && 'hidden'}`} alt='' />
        <img src={iconflying} className={`${typepokemon !== 'flying' && 'hidden'}`} alt='' />
        <img src={iconghost} className={`${typepokemon !== 'ghost' && 'hidden'}`} alt='' />
        <img src={icongrass} className={`${typepokemon !== 'grass' && 'hidden'}`} alt='' />
        <img src={iconground} className={`${typepokemon !== 'ground' && 'hidden'}`} alt='' />
        <img src={iconice} className={`${typepokemon !== 'ice' && 'hidden'}`} alt='' />
        <img src={iconnormal} className={`${typepokemon !== 'normal' && 'hidden'}`} alt='' />
        <img src={iconpoison} className={`${typepokemon !== 'poison' && 'hidden'}`} alt='' />
        <img src={iconpsychic} className={`${typepokemon !== 'psychic' && 'hidden'}`} alt='' />
        <img src={iconrock} className={`${typepokemon !== 'rock' && 'hidden'}`} alt='' />
        <img src={iconsteel} className={`${typepokemon !== 'steel' && 'hidden'}`} alt='' />
        <img src={iconwater} className={`${typepokemon !== 'water' && 'hidden'}`} alt='' />
        <span className='font-body text-xs mt-1'>{typepokemon}</span>
      </div>
    </>
  )
}

IconTypePokemon.propTypes = {
  typepokemon: PropTypes.string
}

export default IconTypePokemon
