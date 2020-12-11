import user from '../editthis';
import HEAD from 'next/head';
import Aos from 'aos';
import "aos/dist/aos.css";
const listItems = user.skills[0].map((number) => <li>{number}</li>);
const listItems2 = user.skills[1].map((number) => <li>{number}</li>);
const listItems3 = user.skills[2].map((number) => <li>{number}</li>);
export default function Hello() {
  return <>
    <HEAD>
      <title>{user.name} | {user.job}</title>
      <script src="https://kit.fontawesome.com/4019246ab4.js" crossorigin="anonymous"></script>
      <meta name="description" content={user.description}></meta>
      <meta name="theme-color" content="#ff286fd8" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&family=Poppins:wght@400;700&display=swap" rel="stylesheet"></link>
      <link href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap' rel="stylesheet"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" type="image/png" href="https://img.icons8.com/windows/32/000000/code.png" />
    </HEAD>
    <div className='main'>
      <div className='wrapper'>
        <div className='landing'>
          <section className='section'></section>
          <h1 className='name'>{user.name}</h1>
          <h2 className='job'>{user.job}</h2>
          <img src='/img/coding.svg' className='moon' alt='coding svg illustration'></img>
        </div>
        <div className="about">
          <section className='section'></section>
          <h1>About Me</h1>
          <div className='img'>
            <img src="img/goals.svg" alt='Boy illustration' />
          </div>
          <br />
          <p>{user.description}</p>
        </div>
        <div className='skills'>
          <h1>Skills</h1>
          <h2>{user.skills_title[0]}</h2>
          <ul>{listItems}</ul>
          <h2>{user.skills_title[1]}</h2>
          <ul>{listItems2}</ul>
           <h2>{user.skills_title[2]}</h2>
           <ul>{listItems3}</ul>
          {/* <section className='section'></section> */}
          <div className='img'><img  src='img/patternpad.svg' alt='pattern'></img> </div>
        </div>
        <div className='connect'> 
         <h1>Connect</h1>
         <ul>
           <li> <a href={user.social.github} target='_blank' rel="noreferrer"><i class="fab fa-github"></i> </a></li>
           <li> <a href={user.social.linkedin} target='_blank' rel="noreferrer"><i class="fab fa-linkedin"></i></a></li>
           <li> <a href={user.social.twitter} target='_blank'rel="noreferrer" ><i class="fab fa-twitter"></i> </a></li>
           <li> <a href={user.social.mail} target='_blank' rel="noreferrer"><i class="far fa-envelope"></i></a></li>
           <li> <a href={user.social.instagram} target='_blank' rel="noreferrer"><i class="fab fa-instagram"></i></a></li>

         </ul>
         <h2>Contact Me</h2>
        <form action={user.form} method="POST" className='form' >
        <label for="name"></label> <input id='name' name="name" type="text" name="name" required placeholder='Name'/>
        <label for="email"></label><input type="email" id="email" name="email"required placeholder='Email' />
        <label for="message"></label><textarea name='message' placeholder='Message'></textarea>
     <button type="submit">Send</button>
</form>
        </div>
      </div>
    </div>
  </>
}
