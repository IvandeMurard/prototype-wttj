import { useState } from "react";
import Header from "@/components/Header";
import JobSearchBar from "@/components/jobs/JobSearchBar";
import JobFilters from "@/components/jobs/JobFilters";
import JobCard from "@/components/jobs/JobCard";
import JobFeedback from "@/components/jobs/JobFeedback";
import AIAssistant from "@/components/jobs/AIAssistant";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("Product Manager senior");
  const [location, setLocation] = useState("France");
  const [showAIAssistant, setShowAIAssistant] = useState(false);

  const quickFilters = [
    { label: "Salaire affiché", count: "12.5K", active: true },
    { label: "Télétravail possible", count: "31.5K", active: false },
    { label: "Parentalité flexible", count: "26.7K", active: false },
    { label: "Nomade digital", count: "4K", active: false },
    { label: "Parité salariale", count: "7.7K", active: false },
    { label: "Entrepreneur", count: "5K", active: false }
  ];

  const jobs = [
    {
      id: 1,
      title: "Lead Developer Full Stack",
      company: "Aircall", 
      location: "Paris",
      type: "Télétravail partiel",
      salary: "€65-95k",
      level: "Senior level",
      image: "/lovable-uploads/e2124d72-9cee-4de3-9d95-556e77b699df.png",
      postedDate: "Il y a 2 jours",
      isLiked: false,
      hasApplied: false
    },
    {
      id: 2,
      title: "DevOps Engineer",
      company: "Contentsquare",
      location: "Lyon",
      type: "Télétravail fréquent",
      salary: "€60-80k",
      level: "Senior level",
      image: "/lovable-uploads/32039a4f-d472-4a6a-9f21-5f5524aab575.png",
      postedDate: "Il y a 5 jours",
      isLiked: false,
      hasApplied: false
    },
    {
      id: 3,
      title: "Frontend Engineer React",
      company: "Doctolib",
      location: "Nantes",
      type: "Télétravail fréquent",
      salary: "€55-75k",
      level: "Senior level",
      image: "/lovable-uploads/cf85496b-1954-495f-998d-db53dbcfcd98.png",
      postedDate: "Il y a 1 semaine",
      isLiked: false,
      hasApplied: false,
      isViewed: true
    },
    {
      id: 4,
      title: "Tech Lead Backend",
      company: "BlaBlaCar",
      location: "Bordeaux",
      type: "Télétravail total",
      salary: "€70-100k",
      level: "Expert level",
      image: "/lovable-uploads/46fd2216-609c-4ef8-ae17-3e6b9fa9616c.png",
      postedDate: "Il y a 3 jours",
      isLiked: false,
      hasApplied: false
    },
    {
      id: 5,
      title: "Product Manager Senior",
      company: "Alan",
      location: "Toulouse",
      type: "Télétravail partiel",
      salary: "€75-110k",
      level: "Senior level",
      image: "/lovable-uploads/b51adb95-49e7-4d3f-befc-f77ca0de7382.png",
      postedDate: "Il y a 6 jours",
      isLiked: true,
      hasApplied: false
    },
    {
      id: 6,
      title: "Data Engineer",
      company: "Mirakl",
      location: "Marseille",
      type: "Télétravail fréquent",
      salary: "€58-82k",
      level: "Senior level",
      image: "/lovable-uploads/3daf6cc6-782b-406b-ba04-b92c9ec65dc4.png",
      postedDate: "Il y a 4 jours",
      isLiked: false,
      hasApplied: false
    },
    {
      id: 7,
      title: "Engineering Manager",
      company: "Back Market",
      location: "Lille",
      type: "Télétravail partiel",
      salary: "€85-120k",
      level: "Lead level",
      image: "/lovable-uploads/f2161f4e-5f19-410a-b01f-03c579527f9f.png",
      postedDate: "Il y a 1 jour",
      isLiked: false,
      hasApplied: false
    },
    {
      id: 8,
      title: "Solutions Architect",
      company: "OVHcloud",
      location: "Roubaix",
      type: "Télétravail fréquent",
      salary: "€68-95k",
      level: "Senior level",
      image: "/lovable-uploads/23257e1e-e287-4a07-a000-22373cfef9ae.png",
      postedDate: "Il y a 1 semaine",
      isLiked: false,
      hasApplied: true
    },
    {
      id: 9,
      title: "CTO",
      company: "Startup fintech",
      location: "Nice",
      type: "Télétravail total",
      salary: "€100-150k + equity",
      level: "C-level",
      image: "/lovable-uploads/b4b2cadc-f54e-470f-9c50-8d43e5fe90e6.png",
      postedDate: "Il y a 8 jours",
      isLiked: false,
      hasApplied: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Bandeau jaune */}
      <div className="bg-wttj-yellow py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-black">
            Découvrez les offres qui vous correspondent
          </h1>
        </div>
      </div>
      
      <JobSearchBar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        location={location}
        setLocation={setLocation}
      />

      <JobFilters filters={quickFilters} />

      {/* Jobs Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        <JobFeedback />
      </div>

      <AIAssistant 
        showAIAssistant={showAIAssistant}
        setShowAIAssistant={setShowAIAssistant}
      />
    </div>
  );
};

export default Jobs;