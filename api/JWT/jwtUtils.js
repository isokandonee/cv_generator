const jwt = require("jsonwebtoken");

//creating JWT Token
const createJWTToken =  ({payload}) => {
 const token= jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
  return token
};

//Verifying the token

const isTokenValid=({token})=>{
    return jwt.verify(token, process.env.JWT_SECRET); 
}

//attaching token to cookies
const attachCookiesToResponse = ({ res, user }) => {
  const token = createJWTToken({ payload: user });

  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
    signed: true,
  });
};



module.exports={isTokenValid,createJWTToken,attachCookiesToResponse}