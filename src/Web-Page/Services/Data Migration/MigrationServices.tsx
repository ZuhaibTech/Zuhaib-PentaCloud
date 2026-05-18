"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Cloud, Database, Settings, Mail, Archive, CheckCircle2 } from "lucide-react";
import { CLAY_CARD } from "./Constants";

const migrationServices = [
  {
    icon: <Users className="text-[#1A7FD4]" />,
    title: "CRM Data Migration",
    body: "We migrate complete CRM datasets — contacts, accounts, leads, opportunities, activities, custom objects, and all historical data — between platforms without losing relationships, lookup fields, or data hierarchy. Specialising in migrations to and from Salesforce, Zoho CRM, HubSpot, Microsoft Dynamics, and legacy in-house CRMs.",
    included: ["Salesforce to Salesforce", "Legacy CRM to Salesforce", "HubSpot to Salesforce", "Dynamics to Salesforce", "Any CRM to Zoho CRM", "Zoho to Salesforce", "Custom CRM Decommissions"],
    metric: "100% relationship integrity maintained across all CRM migrations"
  },
  {
    icon: <Cloud className="text-[#29C6E0]" />,
    title: "Cloud Data Migration",
    body: "We migrate on-premise workloads, databases, and applications to cloud environments — AWS, Azure, and GCP — using a phased approach that ensures business continuity throughout. Includes lift-and-shift, re-platforming, and re-architecture migrations depending on your long-term cloud strategy.",
    included: ["On-Premise to AWS", "On-Premise to Azure", "On-Premise to GCP", "AWS to Azure (cross-cloud)", "Azure to AWS (cross-cloud)", "Private Cloud to Public Cloud", "Hybrid Cloud Setup"],
    metric: "Zero-downtime cloud migrations with full rollback capability"
  },
  {
    icon: <Database className="text-[#8B5CF6]" />,
    title: "Database Migration",
    body: "We migrate databases across engines and platforms — MySQL, PostgreSQL, Microsoft SQL Server, Oracle, MongoDB, and more — handling schema conversion, data type mapping, stored procedure migration, and post-migration validation to ensure your applications run flawlessly on the new database.",
    included: ["MySQL to PostgreSQL", "Oracle to AWS RDS", "SQL Server to Azure SQL", "MongoDB Atlas Migrations", "Database Version Upgrades", "On-Premise DB to Cloud DB", "Database Consolidations"],
    metric: "Full schema integrity and zero query performance regression"
  },
  {
    icon: <Settings className="text-[#F59E0B]" />,
    title: "ERP & Business System Migration",
    body: "We migrate complex ERP and business system data — financial records, inventory, HR data, purchase orders, and customer master data — between platforms like SAP, Oracle ERP, Microsoft Dynamics, Tally, and cloud ERP solutions. Every migration includes a parallel-run period to validate data accuracy before full cutover.",
    included: ["Tally to Cloud ERP", "SAP to Azure / AWS", "Legacy ERP Decommissions", "ERP Version Upgrades", "Financial Data Migrations", "HR System Migrations", "Inventory Data Transfers"],
    metric: "100% financial record accuracy post-migration validated by dual-run period"
  },
  {
    icon: <Mail className="text-[#EC4899]" />,
    title: "Email & Collaboration Migration",
    body: "We migrate complete email environments — emails, calendars, contacts, distribution lists, shared mailboxes, and archived data — between platforms with zero message loss and minimal disruption to daily operations. Including migrations to Microsoft 365 and Google Workspace.",
    included: ["On-Premise Exchange to M365", "Google Workspace to M365", "M365 to Google Workspace", "Hosted Exchange Migrations", "Shared Mailbox Migrations", "Teams & SharePoint Data", "Email Archive Migrations"],
    metric: "Zero email loss with full metadata preservation across all migrations"
  },
  {
    icon: <Archive className="text-[#34C98A]" />,
    title: "Legacy System & File Migration",
    body: "We decommission legacy systems and migrate unstructured data — file shares, document management systems, SharePoint environments, and on-premise storage — to modern cloud storage platforms including SharePoint Online, AWS S3, Google Drive, and OneDrive for Business.",
    included: ["File Server to SharePoint Online", "On-Premise to AWS S3", "Legacy DMS Migrations", "SharePoint On-Premise to Online", "Network Drives to OneDrive", "Document Archive Migrations", "Legacy Application Sunset"],
    metric: "Complete metadata and permission structure preserved post-migration"
  }
];

const MigrationServices = () => {
  return (
    <section className="mb-12 sm:mb-24 md:mb-32">
      <div className="text-center mb-10 sm:mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 bg-blue-50 text-[#1A7FD4] rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[2px] sm:tracking-[3px] mb-4 sm:mb-6"
        >
          WHAT WE MIGRATE
        </motion.div>
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-nunito font-black text-[#0D1B2A] mb-4 sm:mb-6 leading-tight">
          Every Type of Data, <br/> <span className="text-[#1A7FD4]">Every Platform</span>
        </h2>
        <p className="text-[#4A6080] max-w-2xl mx-auto font-inter text-xs sm:text-base md:text-lg leading-relaxed px-2">
          From legacy on-premise systems to modern cloud platforms — we migrate any data, from anywhere, to anywhere, with complete integrity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
        {migrationServices.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className={`${CLAY_CARD} p-5 sm:p-8 group hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full rounded-[20px] sm:rounded-[32px] overflow-hidden`}
          >
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-background shadow-inner flex items-center justify-center mb-4 sm:mb-6 border border-white/50 group-hover:scale-110 transition-transform shrink-0">
              {React.cloneElement(service.icon, { className: "w-5 h-5 sm:w-6 sm:h-6" })}
            </div>
            <h3 className="text-base sm:text-xl font-nunito font-black text-[#0D1B2A] mb-2 sm:mb-4 leading-tight">{service.title}</h3>
            <p className="text-[#4A6080] font-inter text-[11px] sm:text-xs leading-relaxed mb-4 sm:mb-6 flex-grow">{service.body}</p>
            
            <div className="mb-4 sm:mb-6">
              <p className="text-[#0D1B2A] font-black text-[9px] sm:text-[10px] uppercase tracking-widest mb-2 sm:mb-3">What's Covered:</p>
              <ul className="grid grid-cols-1 gap-1.5">
                {service.included.slice(0, 4).map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[10px] sm:text-[11px] text-[#4A6080]">
                    <CheckCircle2 size={11} className="text-[#34C98A] shrink-0" /> <span className="truncate">{item}</span>
                  </li>
                ))}
                {service.included.length > 4 && <li className="text-[9px] sm:text-[10px] text-[#1A7FD4] font-bold ml-5">+ {service.included.length - 4} More</li>}
              </ul>
            </div>

            <div className="mt-auto pt-4 border-t border-blue-50">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-[#34C98A]/10 text-[#34C98A] rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider shrink-0">
                  Result Metric
                </div>
                <p className="text-[9px] sm:text-[10px] font-bold text-[#0D1B2A] truncate">{service.metric}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MigrationServices;
