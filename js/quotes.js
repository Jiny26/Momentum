const quotes = [
{
    quote : "사람 마음이 바뀔 수도 있지. 매사 분명하게 살 순 없어.",
    author : "「아쿠아맨」 中"
},
{
    quote : `I have learned you are never too small to make a difference. 
            Together and united, we are unstoppable.`,
    author : "Greta Thunberg"
},
{
    quote : `변화. 누가 시켜서 되는 게 아닌 스스로의 변화 말이다.
            사람은 변화를 싫어하는 게 아니라
            누군가에 의해 변화를 요구 받는게 싫은 거라는 말을 들은 적이 있다.
            그래서 바뀔 것을 요구하기보다는 기다려주며 넌지시 도와야 했다.`,
    author : "「불편한 편의점2」 中"
},
{
    quote : `평안. 평안은 문제가 해결되어서가 아니라 문제를 문제로 바라볼 수 있어 가능했다.
            늘 잘해왔다 여기기 위해 덮어둔 것을 돌아보았고,
            부족한 내 모습을 바라보기 위해 분주히 애썼다.
            호수에 유유히 떠 있는 오리가 수면 아래서 분주히 발을 놀리는 것처럼,
            평안을 위해 부지런히 자신의 상처를 돌보고 마음을 다스려야 했다.`,
    author : "「불편한 편의점2」 中"
},
{
    quote : `지금의 행복에 충실하기 위해 현재를 살고
            아직 만나지 못한 행복을 위해 미래를 기대해야 하며,
            지나고 나서야 깨닫는 행복을 위해 과거를 되새기며 살아야 한다.`,
    author : "「달러구트 꿈 백화점」 中"
}, 
{
    quote : `눈에 보이지 않는 것보다 마음에 보이지 않는 것이 더 두려운 일이다`,
    author : "Talmud"
},
{
    quote : `전요,
            뭔가를 즐겁게 기다리는 것에 그 즐거움의 절반은 있다고 생각해요.
            그 즐거움이 일어나지 않는다고 해도
            즐거움을 기다리는 동안의 기쁨이란 틀림없이 나만의 것이니까요.`,
    author : "「빨간머리 앤이 하는 말」 中"
},
{
    quote : `어른이 된다는 것은 울고 싶을 때도 웃어야 하는 것이다.
            어른이 된다는 것은 주저앉고 싶을 때 조차도
            중심을 잃지 않으려 애를 써야 하는 것이다.`,
    author : "「그래도, 사랑」 中"
}
// {
//     quote : ``,
//     author : "「」 中"
// }
];

const quoteSpan = document.querySelector("#quotes span:first-child");
const authorSpan = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quoteSpan.innerText = todaysQuote.quote;
authorSpan.innerText = todaysQuote.author;