const AboutMe = () => { 
    return (
        <section className="AboutMe">
            <img src="public/profile-pic.jpeg" alt="Profile Picture">
            </img>
            <h1 className="text-lg md:text-2xl font-bold mt-3">About Me</h1>
        <p className="text-secondary-foreground">
        I am a Senior Consultant who is currently studying computer engineering and have worked on multiple projects. I enjoy playing sports, reading, and taking care of plants. 
        </p>
          <div className="flex flex-row gap-2 mt-2">
            <a href="https://www.linkedin.com/in/ryan-fredericks-1389b8192?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bzv3izNACRBiF3FX47KeIEA%3D%3D">
            <Linkedin className="text-blue-400 hover:text-blue-700 cursor-pointer"/>
            </a>
            <a href="https://github.com/Kurt1717">
            <Github className="text-blue-400 hover:text-blue-700 cursor-pointer"/>
            </a>
            <a href="mailto:rfredericks98@gmail.com">
             <Email className="text-blue-400 hover:text-blue-700 cursor-pointer"/>
            </a>
         </div>
        </section>
    )
}
export default AboutMe;