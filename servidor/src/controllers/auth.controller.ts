import {Request, Response} from 'express';
import axios from 'axios'

const clientId = process.env.GITHUB_CLIENT_ID
const clientSecret = process.env.SECRET_GITHUB_CLIENT_ID
const gitUrl = "https://github.com/login/oauth"

export const login = (req: Request, res: Response) => {
    console.log(clientId)
    const callbackUrl = `${process.env.CLIENT_URL}auth/login/callback`
    res.redirect(`${gitUrl}/authorize?client_id=${clientId}&redirect_uri=${callbackUrl}`)

};
 const getAccessToken = async (code: string) =>{
     const body = {
        client_id: clientId,
        client_secret: clientSecret,
        code
     }
     const config = {
        headers:{
            Accept: "application/json"
        }
     }
    const res = await axios.post(`https://github.com/login/oauth/access_token`,body, config)
     console.log(res.data.access_token)
    const info = await axios.get(`https://api.github.com/user`,{headers: { Authorization: `Bearer ${res.data.access_token}`}})
     console.log(info.data)
    }
export const callback = (req: Request, res: Response) => {  
    console.log("callback")
    const code = req.query.code as string;
    getAccessToken(code)
   
};
export const logout = (req: Request, res: Response) => {
    res.send('logout')

};


