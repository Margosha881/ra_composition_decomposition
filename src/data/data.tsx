import { TCategories, TNews, TOnline, TMapGermany, TTVguide, TVisited } from "../types.js";

const newsImg: string = 'https://steamuserimages-a.akamaihd.net/ugc/2020478008810147115/67ABDADB57806377835398B5037909A0A1ABB263/?imw=512&amp;&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=false';


export const news: TNews[] = [
    {img: newsImg, title: 'Путин упростил получение автомобильных номеров', link: '...'},
    {img: newsImg, title: 'В команде Зеленского раскрыли план реформ на Украине', link: '...'},
    {img: newsImg, title: '"Турпомощь" прокомментировала гибель десятков россиян в Анталье', link: '...'},
    {img: newsImg, title: 'Суд закрыл дело Демпартии США против России', link: '...'},
    {img: newsImg, title: 'На украине призвали создать ракеты для удара по Москве', link: '...'},
];

export const categories: TCategories = ['Видео', 'Картинки', 'Новости', 'Карты', 'Маркет', 'Переводчик', 'Еще'];

export const visited: TVisited[] = [
    {title: 'Недвижимость', description: 'о сталинках'},
    {title: 'Маркет', description: 'люстры и светильники'},
    {title: 'Авто.ру', description: 'привод 4х4 до 500 000'}
]

export const mapGermany: TMapGermany = ['Расписания']

export const tvguide: TTVguide[] = [
    {time: '02:00', name: 'ТНТ.Best'},
    {time: '02:15', name: 'Джинглики'},
    {time: '02:25', name: 'Наедине со всеми'}
]

export const online: TOnline = ['Управление как искусство', 'Ночь. Мир в это время', 'Андрей Возн...']