import { IStage } from '../types';
import stage1img from './images/stage1.png';
import stage2img from './images/stage2.png';
import stage3img from './images/stage3.png';

export const data: IStage[] = [
  {
    number: '01',
    title: 'согласовываем цели',
    subtitle:
      'обсуждаем особенности \nвашей ситуации определяем предстоящие задачи',
    image: stage1img,
  },
  {
    number: '02',
    title: 'совместно разрабатываем техническое задание',
    subtitle:
      'определяем перечень информационных ресурсов с целью оценки защищенности\nопределяем дозволенные техники, тактики и подходы к оценке защищенности\nформулируем требования и обязательства сторон\nдокументально закрепляем сформулированные договоренности',
    image: stage2img,
  },
  {
    number: '03',
    title: 'приступаем к оценке защищенности',
    subtitle: 'действуем в соответствии с согласованным техническим заданием',
    image: stage3img,
  },
];
