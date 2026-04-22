
export default function Team() {
  const teamMembers = [
    {
      name: "Ahmed Rahman",
      role: "Lead Graphics Designer", 
      specialty: "Brand Identity & Visual Design",
      image: "https://readdy.link/preview/f34176ee-94c0-42cd-b32b-333721c77049/4124602/api/search-image?query=Professional%20male%20graphic%20designer%20portrait%20in%20business%20casual%20attire%2C%20confident%20smile%2C%20clean%20white%20background%2C%20modern%20corporate%20headshot%2C%20trustworthy%20appearance%2C%20creative%20professional%20look%2C%20high-quality%20studio%20photography&width=400&height=500&seq=team-1&orientation=portrait",
      skills: ["Adobe Creative Suite", "Brand Strategy", "UI/UX Design"]
    },
    {
      name: "Karim Hassan", 
      role: "Senior Web Developer",
      specialty: "Full-Stack Development",
      image: "https://readdy.link/preview/f34176ee-94c0-42cd-b32b-333721c77049/4124602/api/search-image?query=Professional%20male%20web%20developer%20portrait%20in%20business%20casual%20attire%2C%20friendly%20smile%2C%20clean%20white%20background%2C%20modern%20corporate%20headshot%2C%20tech%20professional%20appearance%2C%20high-quality%20studio%20photography&width=400&height=500&seq=team-2&orientation=portrait",
      skills: ["React", "Node.js", "Database Design"]
    },
    {
      name: "Yusuf Ali",
      role: "Lead 3D Artist",
      specialty: "3D Visualization & Rendering", 
      image: "https://readdy.link/preview/f34176ee-94c0-42cd-b32b-333721c77049/4124602/api/search-image?query=Professional%20male%203D%20artist%20portrait%20in%20business%20casual%20attire%2C%20confident%20expression%2C%20clean%20white%20background%2C%20modern%20corporate%20headshot%2C%20creative%20professional%20look%2C%20high-quality%20studio%20photography&width=400&height=500&seq=team-3&orientation=portrait",
      skills: ["3D Modeling", "Rendering", "Animation"]
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three expert brothers working together to deliver exceptional creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all">
              <div className="aspect-[4/5] overflow-hidden bg-gray-50">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.specialty}</p>
                
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded-full border border-gray-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
