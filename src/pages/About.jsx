const About = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <img src="/placeholder.svg" alt="Profile" className="mx-auto object-cover w-32 h-32 rounded-full mb-4" />
      <p className="text-lg">This is a brief description about me.</p>
    </div>
  );
};

export default About;