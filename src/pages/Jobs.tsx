import { useState } from "react";
import Header from "@/components/Header";
import JobSearchBar from "@/components/jobs/JobSearchBar";
import JobFilters from "@/components/jobs/JobFilters";
import JobCard from "@/components/jobs/JobCard";
import JobFeedback from "@/components/jobs/JobFeedback";
import AIAssistantWidget from "@/components/jobs/AIAssistantWidget";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("Product Manager senior");
  const [location, setLocation] = useState("France");

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
      title: "Product Designer Senior",
      company: "Pennylane", 
      location: "Paris",
      type: "Télétravail partiel",
      salary: "€50-85k",
      level: "Senior level",
      image: "/lovable-uploads/e2124d72-9cee-4de3-9d95-556e77b699df.png",
      postedDate: "Il y a 14 jours",
      isLiked: false,
      hasApplied: false
    },
    {
      id: 2,
      title: "Product Owner (F/H)",
      company: "Payfit",
      location: "Lyon",
      type: "Télétravail fréquent",
      salary: "55K à 70K €",
      image: "/lovable-uploads/32039a4f-d472-4a6a-9f21-5f5524aab575.png",
      postedDate: "Il y a 15 jours",
      isLiked: false,
      hasApplied: false
    },
    {
      id: 3,
      title: "Product Designer",
      company: "Lucca",
      location: "Nantes",
      type: "Télétravail fréquent",
      salary: "50K à 65K €",
      image: "/lovable-uploads/cf85496b-1954-495f-998d-db53dbcfcd98.png",
      postedDate: "Il y a 16 jours",
      isLiked: false,
      hasApplied: false,
      isViewed: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Bandeau jaune */}
      <div className="bg-wttj-yellow py-4">
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

      <AIAssistantWidget />

      {/* Jobs Content */}
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        <JobFeedback />
      </div>
    </div>
  );
};

export default Jobs;
