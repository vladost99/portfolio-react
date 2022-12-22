import SocialMediaIcons from "components/SocialMediaIcons";


const Footer = () => {
  return (
   <footer className="h064 bg-red pt-10">
      <div className="w-5/6 mx-auto">
          <SocialMediaIcons /> 
          <div className="md:flex justify-center md:justify-between text-center">
               <p className="font-playfir font-semibold text-2xl text-yellow">JANE ESPER</p>
               <p className="font-playfir text-md text-yellow">©2022 ESPER.All Rigths Reserved</p> 
          </div> 
      </div>
   </footer>
  )
}

export default Footer