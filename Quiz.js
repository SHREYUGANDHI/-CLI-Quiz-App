const readline = require("readline");
const rl = readline.createInterface(
{
    input:process.stdin,
    output:process.stdout,
}
);
console.log(" WELCOME TO HAVE SOME FUN GAME QUIZ OF CHETAN BHAGAT NOVEL HALF GIRLFRIEND \n")
var name = "";
rl.question(" ENTER NAME : ",(nm)=>
{
    name = nm;
    console.log(" WELCOME "+ name+"\n");
    quiz();
}
);

var a = 0;
var score = 0;
const que = ["WHO IS THE AUTHOR OF HALF GIRLFRIEND  ?","THE RECENTLY BOOK  HALF GIRLFRIEND  IS WRITTEN BY -","In which language is HALF GIRLFRIEND WAS written ?","HOW MANY PAGES IN NOVEL?"];
const opt = [["AMISH TRIPATHI","CHETAN BHAGAT","RUSKIN BOND","R.K. NARAYAN"],["KAVYA SHETH","CHETAN BHAGAT","RUSKIN BOND ","ANITA DESAI"],["URDU AND HINDI","GUJARATI AND HINDI","ENGLISH AND GUJARATI","B & C"],["290 ","260 ","230 ","210"]];

var quiz = ()=>
{
    if(a === 0)
{
        console.log(que[a]);
        for(var j =0;j<4;j++)
        {
            console.log((j+1)+"-"+opt[a][j]);
        }
        rl.question(" ANSWER PLEASE :- ",(ans)=>
{
            if(ans === "2")
            {
                score += 5;
                console.log(" EXCELLENT !!!  "+"\tYOU SECURE :- "+score);
                a+=1;
                quiz();
            }
            else
            {
                console.log(" OOPS TRY AGAIN !!! "+"\nRIGHT ANSWER is ->"+ opt[a][1]+"\tYOU SECURE :- "+score);
                score -= 2;
                a+=1;
                quiz();
            }

        }
);
 }
    else if(a === 1)
    {
        console.log(que[a]);
        for(var j =0;j<4;j++)
        {
            console.log((j+1)+"-"+opt[a][j]);
        }
        rl.question(" ANSWER PLEASE :- ",(ans)=>
{
            if(ans === "2")
            {
                score += 5;
                console.log("  EXCELLENT !!!  "+"\tYOU SECURE :- "+score);
                a+=1;
                quiz();
            }
            else
            {
               console.log(" OOPS TRY AGAIN !!! "+"\nRight answer is ->"+ opt[i][1]+"\tYour Score :- "+score);
                score -= 2;
                a+=1;
                quiz();
            }

        }
);
    }
    else if(a === 2)
    {
        console.log(que[a]);
        for(var j =0;j<4;j++)
        {
            console.log((j+1)+"-"+opt[a][j]);
        }
        rl.question(" ANSWER PLEASE :- ",(ans)=>
{
            if(ans === "4")
            {
                score += 5;
                console.log(" EXCELLENT !!!  "+"\t :- "+score);
                a+=1;
                quiz();
            }
            else
            {
               console.log(" OOPS TRY AGAIN !!! "+"\nRight answer is ->"+ opt[a][3]+"\tYour Score :- "+score);
                score -= 2;
                a+=1;
                quiz();
            }

        });
    }
    else if(a === 3)
    {
        console.log(que[a]);
        for(var j =0;j<4;j++)
        {
            console.log((j+1)+"-"+opt[a][j]);
        }
        rl.question(" ANSWER PLEASE :- ",(ans)=>
{
            if(ans === "2")
            {
                score += 5;
                console.log(" EXCELLENT !!!   "+"\tYour Score :- "+score);
                a+=1;
                quiz();
            }
            else
            {
               console.log(" OOPS TRY AGAIN !!!  "+"\nRight answer is ->"+ opt[a][1]+"\tYour Score :- "+score);
                score -= 2;
                a+=1;
                quiz();
            }

        }
);
    }
 
    else
    {
        console.log(" FINALLY U SECURE "+name+": "+ score+"/"+(que.length*5));
        rl.close();
    }
}