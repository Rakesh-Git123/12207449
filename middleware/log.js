import axios from "axios";

const LOG_API_URL = "http://20.244.56.144/eva1uation-service/logs";
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJyazExNzc3OTE2QGdtYWlsLmNvbSIsImV4cCI6MTc1MjQ3MDQ1MCwiaWF0IjoxNzUyNDY5NTUwLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMGIwN2JmNGMtMjgzYy00NmEyLWI3YzEtNGJiNmM3ODRjNmI3IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicmFrZXNoIGt1bWFyIiwic3ViIjoiNzMwZWFlYzMtZDFiNi00YTVlLWE0ZTYtODM3MDBmMzY4M2RhIn0sImVtYWlsIjoicmsxMTc3NzkxNkBnbWFpbC5jb20iLCJuYW1lIjoicmFrZXNoIGt1bWFyIiwicm9sbE5vIjoiMTIyMDc0NDkiLCJhY2Nlc3NDb2RlIjoiQ1p5cFFLIiwiY2xpZW50SUQiOiI3MzBlYWVjMy1kMWI2LTRhNWUtYTRlNi04MzcwMGYzNjgzZGEiLCJjbGllbnRTZWNyZXQiOiJTcnBZVHVXQmFVSnNBUlllIn0.ckWYbBhBndnLQXHtK9J3XJ6_YpTQ-ouA9IuvBJPvc_M";

export const Log =async(stack, level, pkg, message)=>{
    try{
        await axios.post(LOG_API_URL,
            {
                stack,
                level,
                package:pkg,
                message
            },
            {
                headers: {
                  Authorization: `Bearer ${AUTH_TOKEN}`,
                  "Content-Type": "application/json",
                },
              }
        )
    }
    catch(err){
        
    }
}