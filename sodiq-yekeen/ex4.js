//Function to scrape the JUST IN section of https://punchng.com/
let justIn = document.querySelectorAll('.latest-news > .row > ul > li > a');
let justInResponse = {}

for (let count = 0; count < justIn.length; count++) {
	justInResponse[count] = justIn[count].textContent;
}

document.write(JSON.stringify(justInResponse));


/**
Result:

{"0":"BREAKING: Lagos CP orders posthumous trial of of F-SARS operative who killed LASTMA officer","1":"Akume never wanted me to sign anti-open grazing law — Ortom","2":"ICYMI: Bricklayer jailed for assaulting commercial sex worker","3":"Gabon president leaves Saudi hospital","4":"Police reopen Anambra House of Assembly","5":"US life expectancy drops again as drug overdose deaths climb","6":"ICYMI: Woman protests after rapist was granted parental access to her son","7":"Power supply tops Nigerians’ complaints list, says CPC","8":"UEFA Champions League top scorers","9":"Five ways to manage joint account with your spouse","10":"Investors lobby as PFAs invest N17bn pension funds in infrastructure","11":"Port Harcourt building collapse: Police arrest property owner","12":"Ex-Eagles star, Etuhu, stands trial in Sweden over match-fixing","13":"Malabu: Nigeria loses over $10bn in one deal, say Reps, CSO","14":"Senate okays higher institutions for President’s hometown, nine others"}

**/

//Function to scrape the TRENDING section of https://punchng.com/

let trending = document.querySelectorAll('.tptn_posts_daily  > ul > li > span > a > h1');
let trendingResponse = {}

for (let count = 0; count < trending.length; count++) {
	trendingResponse[count] = trending[count].textContent;
}

document.write(JSON.stringify(trendingResponse));

/**Result:

{"0":"Senate okays higher institutions for President’s hometown,","1":"EFCC hands over 116 cars, 20 houses to First Bank ","2":"Suspected F-SARS operative shoots LASTMA official dead","3":"Metele attack: Army confirms 23 soldiers killed, 31 others…","4":"UEFA Champions League top scorers","5":"Brothers behead 10-year-old for N200,000 in Lagos","6":"Arrest Aregbesola for forging police report, PDP tells IGP","7":"Metele attack: No army can have enough equipment for…"}
**/