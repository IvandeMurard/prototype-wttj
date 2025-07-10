import { useState } from "react";
import Header from "@/components/Header";
import JobSearchBar from "@/components/jobs/JobSearchBar";
import JobFilters from "@/components/jobs/JobFilters";
import JobCard from "@/components/jobs/JobCard";
import JobFeedback from "@/components/jobs/JobFeedback";
import AIAssistant from "@/components/jobs/AIAssistant";

const JobOffers = () => {
  const [searchQuery, setSearchQuery] = useState("Developer");
  const [location, setLocation] = useState("France");
  const [showAIAssistant, setShowAIAssistant] = useState(false);

  const quickFilters = [
    { label: "Salaire affiché", count: "15.2K", active: true },
    { label: "Télétravail possible", count: "28.3K", active: false },
    { label: "Startup", count: "8.1K", active: false },
    { label: "Scale-up", count: "12.4K", active: false },
    { label: "Remote first", count: "6.7K", active: false },
    { label: "Tech lead", count: "3.9K", active: false }
  ];

  const jobs = [
    {
      id: 1,
      title: "Lead Developer Full Stack",
      company: "Zenly",
      location: "Paris",
      type: "Télétravail partiel",
      salary: "€85-120k",
      level: "Senior level",
      image: "/lovable-uploads/23257e1e-e287-4a07-a000-22373cfef9ae.png",
      postedDate: "Il y a 3 jours",
      isLiked: false,
      hasApplied: false
    },
    {
      id: 2,
      title: "DevOps Engineer",
      company: "Criteo",
      location: "Lyon",
      type: "Télétravail fréquent",
      salary: "€70-95k",
      level: "Senior level",
      image: "/lovable-uploads/32039a4f-d472-4a6a-9f21-5f5524aab575.png",
      postedDate: "Il y a 5 jours",
      isLiked: false,
      hasApplied: false
    },
    {
      id: 3,
      title: "Frontend Developer React",
      company: "Doctolib",
      location: "Bordeaux",
      type: "Remote",
      salary: "€55-75k",
      level: "Junior level",
      image: "/lovable-uploads/cf85496b-1954-495f-998d-db53dbcfcd98.png",
      postedDate: "Il y a 1 semaine",
      isLiked: false,
      hasApplied: false,
      isViewed: true
    },
    {
      id: 4,
      title: "Backend Engineer Node.js",
      company: "Algolia",
      location: "Toulouse",
      type: "Télétravail partiel",
      salary: "€65-85k",
      level: "Mid level",
      image: "/lovable-uploads/46fd2216-609c-4ef8-ae17-3e6b9fa9616c.png",
      postedDate: "Il y a 4 jours",
      isLiked: false,
      hasApplied: false
    },
    {
      id: 5,
      title: "CTO / Co-founder",
      company: "Startup Tech",
      location: "Paris",
      type: "Présentiel",
      salary: "€150k+ equity",
      level: "Executive level",
      image: "/lovable-uploads/b4b2cadc-f54e-470f-9c50-8d43e5fe90e6.png",
      postedDate: "Il y a 2 jours",
      isLiked: false,
      hasApplied: false
    },
    {
      id: 6,
      title: "Mobile Developer React Native",
      company: "BlaBlaCar",
      location: "Nantes",
      type: "Télétravail fréquent",
      salary: "€60-80k",
      level: "Mid level",
      image: "/lovable-uploads/b51adb95-49e7-4d3f-befc-f77ca0de7382.png",
      postedDate: "Il y a 6 jours",
      isLiked: false,
      hasApplied: false
    },
    {
      id: 7,
      title: "Data Engineer",
      company: "Dataiku",
      location: "Lille",
      type: "Télétravail partiel",
      salary: "€75-100k",
      level: "Senior level",
      image: "/lovable-uploads/e2124d72-9cee-4de3-9d95-556e77b699df.png",
      postedDate: "Il y a 1 semaine",
      isLiked: false,
      hasApplied: false
    },
    {
      id: 8,
      title: "Junior Full Stack Developer",
      company: "Leboncoin",
      location: "Marseille",
      type: "Télétravail occasionnel",
      salary: "€45-55k",
      level: "Junior level",
      image: "/lovable-uploads/f2161f4e-5f19-410a-b01f-03c579527f9f.png",
      postedDate: "Il y a 3 jours",
      isLiked: false,
      hasApplied: false
    },
    {
      id: 9,
      title: "Tech Lead Python",
      company: "Deezer",
      location: "Nice",
      type: "Remote",
      salary: "€90-115k",
      level: "Senior level",
      image: "/lovable-uploads/3daf6cc6-782b-406b-ba04-b92c9ec65dc4.png",
      postedDate: "Il y a 2 semaines",
      isLiked: false,
      hasApplied: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
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

export default JobOffers;