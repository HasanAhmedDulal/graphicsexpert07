export default function ToolsTechnologies() {
  const tools = [
    { logo: "https://readdy.ai/api/search-image?query=Adobe%20Photoshop%20official%20logo%20icon%20transparent%20background%20high%20resolution%20clean%20sharp%20professional%20software%20branding&width=120&height=120&seq=ps-logo-001&orientation=squarish", name: "Adobe Photoshop", category: "Graphics", color: "text-blue-600" },
    { logo: "https://readdy.ai/api/search-image?query=Adobe%20Illustrator%20official%20logo%20icon%20transparent%20background%20high%20resolution%20clean%20sharp%20professional%20software%20branding&width=120&height=120&seq=ai-logo-002&orientation=squarish", name: "Adobe Illustrator", category: "Graphics", color: "text-orange-500" },
    { logo: "https://readdy.ai/api/search-image?query=Figma%20official%20logo%20icon%20transparent%20background%20high%20resolution%20clean%20sharp%20professional%20design%20tool%20branding&width=120&height=120&seq=figma-logo-003&orientation=squarish", name: "Figma", category: "Design", color: "text-purple-500" },
    { logo: "https://readdy.ai/api/search-image?query=React%20official%20logo%20icon%20transparent%20background%20high%20resolution%20clean%20sharp%20professional%20javascript%20library%20branding&width=120&height=120&seq=react-logo-004&orientation=squarish", name: "React", category: "Development", color: "text-blue-500" },
    { logo: "https://readdy.ai/api/search-image?query=Next.js%20official%20logo%20icon%20transparent%20background%20high%20resolution%20clean%20sharp%20professional%20framework%20branding&width=120&height=120&seq=nextjs-logo-005&orientation=squarish", name: "Next.js", category: "Development", color: "text-gray-900" },
    { logo: "https://readdy.ai/api/search-image?query=Node.js%20official%20logo%20icon%20transparent%20background%20high%20resolution%20clean%20sharp%20professional%20javascript%20runtime%20branding&width=120&height=120&seq=nodejs-logo-006&orientation=squarish", name: "Node.js", category: "Development", color: "text-green-600" },
    { logo: "https://readdy.ai/api/search-image?query=Blender%20official%20logo%20icon%20transparent%20background%20high%20resolution%20clean%20sharp%20professional%203D%20software%20branding&width=120&height=120&seq=blender-logo-007&orientation=squarish", name: "Blender", category: "3D", color: "text-orange-600" },
    { logo: "https://readdy.ai/api/search-image?query=3ds%20Max%20official%20logo%20icon%20transparent%20background%20high%20resolution%20clean%20sharp%20professional%20Autodesk%20software%20branding&width=120&height=120&seq=3dsmax-logo-008&orientation=squarish", name: "3ds Max", category: "3D", color: "text-blue-700" },
    { logo: "https://readdy.ai/api/search-image?query=Cinema%204D%20official%20logo%20icon%20transparent%20background%20high%20resolution%20clean%20sharp%20professional%20Maxon%20software%20branding&width=120&height=120&seq=c4d-logo-009&orientation=squarish", name: "Cinema 4D", category: "3D", color: "text-red-500" },
    { logo: "https://readdy.ai/api/search-image?query=WordPress%20official%20logo%20icon%20transparent%20background%20high%20resolution%20clean%20sharp%20professional%20CMS%20platform%20branding&width=120&height=120&seq=wp-logo-010&orientation=squarish", name: "WordPress", category: "CMS", color: "text-blue-800" },
    { logo: "https://readdy.ai/api/search-image?query=Shopify%20official%20logo%20icon%20transparent%20background%20high%20resolution%20clean%20sharp%20professional%20ecommerce%20platform%20branding&width=120&height=120&seq=shopify-logo-011&orientation=squarish", name: "Shopify", category: "E-Commerce", color: "text-green-500" },
    { logo: "https://readdy.ai/api/search-image?query=MongoDB%20official%20logo%20icon%20transparent%20background%20high%20resolution%20clean%20sharp%20professional%20database%20software%20branding&width=120&height=120&seq=mongodb-logo-012&orientation=squarish", name: "MongoDB", category: "Database", color: "text-green-700" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Tools & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We use industry-leading tools to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition-all group cursor-pointer">
              <div className="mb-4 flex items-center justify-center">
                <img 
                  src={tool.logo} 
                  alt={`${tool.name} logo`}
                  className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{tool.name}</h3>
              <p className="text-sm text-gray-600">{tool.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
