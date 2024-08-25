import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use('/auth',(req:Request,res:Response)=>{
    const url=`http://localhost:3001${req.originalUrl}`
    axios({method:req.method,url,data:req.body}).then((response)=>{
        res.json(response.data)

    }).catch(err=>{
       res.status(err.response.status).json(err.response.data)
        
    })
})
app.use('/comment',(req:Request,res:Response)=>{
    const url=`http://localhost:3002${req.originalUrl}`
    axios({method:req.method,url,data:req.body}).then((response)=>{
        res.json(response.data)

    }).catch(err=>{
       res.status(err.response.status).json(err.response.data)
        
    })
})

app.use('/post',(req:Request,res:Response)=>{
    const url=`http://localhost:3003${req.originalUrl}`
    axios({method:req.method,url,data:req.body}).then((response)=>{
        res.json(response.data)

    }).catch(err=>{
       res.status(err.response.status).json(err.response.data)
        
    })
})


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});