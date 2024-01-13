
 import { Button, Alert } from '@mui/material'
import AlertDialog from './components/Alert'
import Image from 'next/image'

export default function Home() {
   const add = ()=>{
    alert("helo")
   }
 
  return (
    <>
    <div>
      <Alert  severity="success">
  Here is a gentle confirmation that your action was successful.
</Alert>
      <h1>MY FIRST HOSTING WEBSITE</h1>
       <br/><br/>
       <Image src='/image/images.jpg' alt='doctor' height="100" width="100"></Image>
      <p>
      Father of the Nation Quaid-i-Azam Muhammad Ali Jinnah achievement as the founder of Pakistan, dominates everything else he did in his long and crowded public life spanning some 42 years. Yet, by any standard, his was an eventful life, his personality multidimensional and his achievements in other fields were many, if not equally great. Indeed, several were the roles he had played with distinction: at one time or another, he was one of the greatest legal luminaries India had produced during the first half of the century, an `ambassador of Hindu-Muslim unity, a great constitutionalist, a distinguished parliamentarian, a top-notch politician, an indefatigable freedom-fighter, a dynamic Muslim leader, a political strategist and, above all one of the great nation-builders of modern times. What, however, makes him so remarkable is the fact that while similar other leaders assumed the leadership of traditionally well-defined nations and espoused their cause, or led them to freedom, he created a nation out of an inchoate and down-trodden minority and established a cultural and national home for it. And all that within a decade. For over three decades before the successful culmination in 1947, of the Muslim struggle for freedom in the South-Asian subcontinent, Jinnah had provided political leaders
      </p>
      <Button variant="contained" onClick={add}>  hello</Button>
      <AlertDialog></AlertDialog>
            
    </div>
    </>
     )
}
