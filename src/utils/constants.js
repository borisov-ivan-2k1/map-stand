import battle from '../assets/svg/legendIcons/battle.svg';
import troopMovement from '../assets/svg/legendIcons/troopMovement.svg';
import osada from '../assets/svg/legendIcons/osada.svg';
import city from '../assets/svg/legendIcons/city.svg';
import dote from '../assets/svg/legendIcons/dote.svg';
import dogovor from '../assets/svg/legendIcons/dogovor.svg';
 
export const eventTypes = [
  { title: 'Битва', value: 'battle' },
  { title: 'Осада', value: 'osada' },
  { title: 'Передвижение войск', value: 'troopMovement' },
  { title: 'HTML', value: 'html' },
];

export const iconTypes = [
  { title: 'Битва', value: 'battle' },
  { title: 'Осада', value: 'osada' },
  { title: 'Передвижение войск', value: 'troopMovement' },
  { title: 'Договор', value: 'dogovor' },
];

export const outcomeTypes = [
  { title: 'Победа', value: 1 },
  { title: 'Ничья', value: 0 },
  { title: 'Поражение', value: -1 },
]

export const eventIcons = {
  osada,
  battle,
  troopMovement,
  city,
  dote,
  dogovor,
}

export const PAST_EVENTS = 'PAST_EVENTS';