const predefinedEvaluationItems = [
  {
      "Id": 89,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "1. Safety Knowledge",
      "Name": "<b>Emergency Equipment</b> (Location, Preflight, Operation) and other related procedures. Specific to:",
      "Ordinal": 1,
      "ParentItem_Id": null,
      "WithRemarks": true
  },
  {
      "Id": 90,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "1. Safety Knowledge",
      "Name": "<b>Security</b> (Hijacking/Unlawful Interference, Bomb Procedures, Unruly Pax, Armed Pax) and other related procedures. Specific to:",
      "Ordinal": 2,
      "ParentItem_Id": null,
      "WithRemarks": true
  },
  {
      "Id": 91,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "1. Safety Knowledge",
      "Name": "<b>First Aid</b> (CPR ��� Adult/Child/Infant, Choking, Shock, Bleeding, Burns, Hyper/Hypoglycemia, Medlink) and other related procedures. Specific to:",
      "Ordinal": 3,
      "ParentItem_Id": null,
      "WithRemarks": true
  },
  {
      "Id": 92,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "1. Safety Knowledge",
      "Name": "<b>Emergency Systems</b> (LAV Smoke alarm, EVAC Systems, EMER Call, Door Operations ��� Normal/Emergency, Oxygen Systems) and other related procedures. Specific to:",
      "Ordinal": 4,
      "ParentItem_Id": null,
      "WithRemarks": true
  },
  {
      "Id": 93,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "1. Safety Knowledge",
      "Name": "<b>Safety Precautions</b> (Refueling, Sterile Flight Deck, Prohibitions, Precautionary Disembarkation, Reduced Crew Complement, Tripped Circuit Braker) and other related procedures. Specific to:",
      "Ordinal": 5,
      "ParentItem_Id": null,
      "WithRemarks": true
  },
  {
      "Id": 94,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "1. Safety Knowledge",
      "Name": "<b>Conditions of Carriage</b> (Limitations, Age UM, Gestation EXMO, documents, requirements and handling for MEDA/UM/PWD/INAD/DEPORTEE,Intoxicated/Abusive pax, ) and other related procedures. Specific to:",
      "Ordinal": 6,
      "ParentItem_Id": null,
      "WithRemarks": true
  },
  {
      "Id": 95,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "1. Safety Knowledge",
      "Name": "<b>Emergency Procedures</b>(Planned/Unplanned Procedures, Commands, Specific Duties, A-pax/Less Agile Instructions, Evacuation procedures, Post EVAC duties) and other related procedures. Specific to:",
      "Ordinal": 7,
      "ParentItem_Id": null,
      "WithRemarks": true
  },
  {
      "Id": 96,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "1. Safety Knowledge",
      "Name": "<b>Fire and Smoke</b> (General Fire Fighting, Lav Fire, Galley Fire, PED fire, Smoke onground/Inflight) and other related procedures. Specific to:",
      "Ordinal": 8,
      "ParentItem_Id": null,
      "WithRemarks": true
  },
  {
      "Id": 97,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "1. Safety Knowledge",
      "Name": "<b>Aircraft Documents</b> (Warning Cards, ASPC, Language Communication Cards, Flight Disturbance Complaint Form, Inflight Situational Data Sheet, ACC, Safety Directives, Equipment Checklist) and other related procedures. Specific to:",
      "Ordinal": 9,
      "ParentItem_Id": null,
      "WithRemarks": true
  },
  {
      "Id": 98,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "1. Safety Knowledge",
      "Name": "<b>Other Emergency Procedures</b> (Decompression, FD Incapacitation, CC Incapacitation, Turbulence) and other related procedures. Specific to:",
      "Ordinal": 10,
      "ParentItem_Id": null,
      "WithRemarks": true
  },
  {
      "Id": 99,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "1. Safety Knowledge",
      "Name": "<b>Dangerous Goods</b> (Classifications, Types, Labels, Acceptable qualifications, box with DG markings, DG Checklist) and other related procedures. Specific to:",
      "Ordinal": 11,
      "ParentItem_Id": null,
      "WithRemarks": true
  },
  {
      "Id": 100,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "3. Standard Operation Procedures Implementation",
      "Name": "Jumpseat protocol.",
      "Ordinal": 4,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 101,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "3. Standard Operation Procedures Implementation",
      "Name": "Checking of Safety Equipment including FD door code, jumpseat, PA etc.",
      "Ordinal": 1,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 102,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "3. Standard Operation Procedures Implementation",
      "Name": "Ensures all seatpockets have Passenger Briefing Cards",
      "Ordinal": 3,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 103,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "3. Standard Operation Procedures Implementation",
      "Name": "Refueling Procedures.",
      "Ordinal": 5,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 104,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "3. Standard Operation Procedures Implementation",
      "Name": "Door area manning",
      "Ordinal": 8,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 105,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "3. Standard Operation Procedures Implementation",
      "Name": "Procedures when R1 enters the FD",
      "Ordinal": 9,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 106,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "3. Standard Operation Procedures Implementation",
      "Name": "Exit row free from baggage/briefed appropriately",
      "Ordinal": 10,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 107,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "3. Standard Operation Procedures Implementation",
      "Name": "Infants lifevest is near the infant at all times",
      "Ordinal": 11,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 108,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "3. Standard Operation Procedures Implementation",
      "Name": "Sterile Flight Deck Procedures",
      "Ordinal": 12,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 109,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "3. Standard Operation Procedures Implementation",
      "Name": "Proper execution of Safety Demonstration",
      "Ordinal": 13,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 110,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "3. Standard Operation Procedures Implementation",
      "Name": "Observance of the seatbelt sign.",
      "Ordinal": 14,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 111,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "3. Standard Operation Procedures Implementation",
      "Name": "Ensures all trolley brakes are operative",
      "Ordinal": 15,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 112,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "3. Standard Operation Procedures Implementation",
      "Name": "Ensure trolley or movable carts are stowed and secured, when needed.",
      "Ordinal": 16,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 113,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "3. Standard Operation Procedures Implementation",
      "Name": "Updated in Safety Memos, Revisions and Updates.",
      "Ordinal": 17,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 114,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "3. Standard Operation Procedures Implementation",
      "Name": "Others",
      "Ordinal": 18,
      "ParentItem_Id": null,
      "WithRemarks": true
  },
  {
      "Id": 117,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "4. Security Procedures Implementation",
      "Name": "Cabin Security Sweep",
      "Ordinal": 1,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 118,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "4. Security Procedures Implementation",
      "Name": "Clear Zone",
      "Ordinal": 2,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 119,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "4. Security Procedures Implementation",
      "Name": "Checking of appropriate security documents",
      "Ordinal": 3,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 120,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "4. Security Procedures Implementation",
      "Name": "Checking of Boarding Pass",
      "Ordinal": 4,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 121,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "4. Security Procedures Implementation",
      "Name": "Cabin Surveillance",
      "Ordinal": 5,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 122,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "4. Security Procedures Implementation",
      "Name": "Checking and Endorsing Left Behind to security",
      "Ordinal": 6,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 123,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "4. Security Procedures Implementation",
      "Name": "Others",
      "Ordinal": 7,
      "ParentItem_Id": null,
      "WithRemarks": true
  },
  {
      "Id": 134,
      "AircraftSection": "LEAD",
      "Category": "III. Duties and Responsibilities",
      "SubCategory": "11. General Procedures Accomplished",
      "Name": "Pre-flight and post-flight duties",
      "Ordinal": 1,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 135,
      "AircraftSection": "LEAD",
      "Category": "III. Duties and Responsibilities",
      "SubCategory": "11. General Procedures Accomplished",
      "Name": "Boarding and deplaning procedures accomplished",
      "Ordinal": 2,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 136,
      "AircraftSection": "LEAD",
      "Category": "III. Duties and Responsibilities",
      "SubCategory": "11. General Procedures Accomplished",
      "Name": "Inflight procedures accomplished",
      "Ordinal": 3,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 137,
      "AircraftSection": "LEAD",
      "Category": "III. Duties and Responsibilities",
      "SubCategory": "11. General Procedures Accomplished",
      "Name": "Use of tray while in the cabin",
      "Ordinal": 4,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 138,
      "AircraftSection": "LEAD",
      "Category": "III. Duties and Responsibilities",
      "SubCategory": "11. General Procedures Accomplished",
      "Name": "LAV checks and replenishment (amenities and supplies)",
      "Ordinal": 5,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 275,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "2. Safety Compliance",
      "Name": "Seatbelts fastened",
      "Ordinal": 1,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 276,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "2. Safety Compliance",
      "Name": "OHB closed",
      "Ordinal": 2,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 277,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "2. Safety Compliance",
      "Name": "Window Shades up",
      "Ordinal": 3,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 278,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "3. Standard Operation Procedures Implementation",
      "Name": "Report equipment discrepancies.",
      "Ordinal": 2,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 279,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "3. Standard Operation Procedures Implementation",
      "Name": "Door operations (Arming, Disarming, Opening ��� with witness, Closing).",
      "Ordinal": 6,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 280,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "3. Standard Operation Procedures Implementation",
      "Name": "Lights Bright on Safety Compliance",
      "Ordinal": 7,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 291,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "5. CEB PLUS Service",
      "Name": "Greet, meet and assist guests during boarding",
      "Ordinal": 1,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 292,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "5. CEB PLUS Service",
      "Name": "With a genuine and sincere SMILE",
      "Ordinal": 2,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 293,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "5. CEB PLUS Service",
      "Name": "Assist guests with bags",
      "Ordinal": 3,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 294,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "5. CEB PLUS Service",
      "Name": "Enthusiastically interact with guests",
      "Ordinal": 4,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 295,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "5. CEB PLUS Service",
      "Name": "Commence Fun games with enjoyment",
      "Ordinal": 5,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 296,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "5. CEB PLUS Service",
      "Name": "Proper service of food and drinks (Handling)",
      "Ordinal": 6,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 297,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "5. CEB PLUS Service",
      "Name": "Assisting guests with their needs",
      "Ordinal": 7,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 298,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "5. CEB PLUS Service",
      "Name": "Service friendliness and attentiveness",
      "Ordinal": 8,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 299,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "5. CEB PLUS Service",
      "Name": "Initiating conversation with guests",
      "Ordinal": 9,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 300,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "5. CEB PLUS Service",
      "Name": "Attend and respond to guest���s call promptly.",
      "Ordinal": 10,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 301,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "5. CEB PLUS Service",
      "Name": "Proper endorsement and assistance given to Special Handling (PWD, EXMO, UM, Elderly etc)",
      "Ordinal": 11,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 302,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "5. CEB PLUS Service",
      "Name": "Anticipate guest���s needs.",
      "Ordinal": 12,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 304,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "5. CEB PLUS Service",
      "Name": "Others",
      "Ordinal": 14,
      "ParentItem_Id": null,
      "WithRemarks": true
  },
  {
      "Id": 305,
      "AircraftSection": "LEAD",
      "Category": "III. Duties and Responsibilities",
      "SubCategory": "11. General Procedures Accomplished",
      "Name": "Proper endorsement of aircraft",
      "Ordinal": 6,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 306,
      "AircraftSection": "LEAD",
      "Category": "III. Duties and Responsibilities",
      "SubCategory": "11. General Procedures Accomplished",
      "Name": "Safety demo done correctly",
      "Ordinal": 7,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 307,
      "AircraftSection": "LEAD",
      "Category": "III. Duties and Responsibilities",
      "SubCategory": "11. General Procedures Accomplished",
      "Name": "Collection of trash (on ground/inflight)",
      "Ordinal": 8,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 308,
      "AircraftSection": "LEAD",
      "Category": "III. Duties and Responsibilities",
      "SubCategory": "11. General Procedures Accomplished",
      "Name": "Trash lining, if applicable",
      "Ordinal": 9,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 309,
      "AircraftSection": "LEAD",
      "Category": "III. Duties and Responsibilities",
      "SubCategory": "11. General Procedures Accomplished",
      "Name": "Cabin Presence throughout the flight",
      "Ordinal": 10,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 310,
      "AircraftSection": "LEAD",
      "Category": "III. Duties and Responsibilities",
      "SubCategory": "11. General Procedures Accomplished",
      "Name": "Clean and organized working environment",
      "Ordinal": 11,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 311,
      "AircraftSection": "LEAD",
      "Category": "III. Duties and Responsibilities",
      "SubCategory": "11. General Procedures Accomplished",
      "Name": "Product and service knowledge",
      "Ordinal": 12,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 312,
      "AircraftSection": "LEAD",
      "Category": "III. Duties and Responsibilities",
      "SubCategory": "11. General Procedures Accomplished",
      "Name": "Others",
      "Ordinal": 13,
      "ParentItem_Id": null,
      "WithRemarks": true
  },
  {
      "Id": 318,
      "AircraftSection": "LEAD",
      "Category": "III. Duties and Responsibilities",
      "SubCategory": "12. Specific duties Accomplished",
      "Name": "BOB",
      "Ordinal": 1,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 319,
      "AircraftSection": "LEAD",
      "Category": "III. Duties and Responsibilities",
      "SubCategory": "12. Specific duties Accomplished",
      "Name": "Merchandise",
      "Ordinal": 2,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 320,
      "AircraftSection": "LEAD",
      "Category": "III. Duties and Responsibilities",
      "SubCategory": "12. Specific duties Accomplished",
      "Name": "Galley Management",
      "Ordinal": 3,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 321,
      "AircraftSection": "LEAD",
      "Category": "III. Duties and Responsibilities",
      "SubCategory": "12. Specific duties Accomplished",
      "Name": "Lavatory preparation",
      "Ordinal": 4,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 351,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "13. Safety Briefing",
      "Name": "Clear and set objectives, content and discussion in the English Language",
      "Ordinal": 1,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 352,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "13. Safety Briefing",
      "Name": "Ensures all are fit for the flight",
      "Ordinal": 2,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 353,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "13. Safety Briefing",
      "Name": "Safety Equipment check",
      "Ordinal": 3,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 354,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "13. Safety Briefing",
      "Name": "Safety knowledge check",
      "Ordinal": 4,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 355,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "13. Safety Briefing",
      "Name": "Pertinent documents and visas check",
      "Ordinal": 5,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 356,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "2. Safety Compliance",
      "Name": "Armrest down",
      "Ordinal": 4,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 357,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "2. Safety Compliance",
      "Name": "Tray Tables stowed",
      "Ordinal": 5,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 358,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "2. Safety Compliance",
      "Name": "Seatback in upright position",
      "Ordinal": 6,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 359,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "2. Safety Compliance",
      "Name": "Seatbelts fastened on empty aisle seats and exit row",
      "Ordinal": 7,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 361,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "2. Safety Compliance",
      "Name": "Electrical power off (galley/charging stations)",
      "Ordinal": 9,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 362,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "2. Safety Compliance",
      "Name": "Bags are properly stowed",
      "Ordinal": 10,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 363,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "2. Safety Compliance",
      "Name": "Baby Bassinet stowed, if applicable",
      "Ordinal": 11,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 364,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "2. Safety Compliance",
      "Name": "Galley equipment stowed/restrained",
      "Ordinal": 12,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 365,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "2. Safety Compliance",
      "Name": "Lavatory preparation",
      "Ordinal": 13,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 366,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "2. Safety Compliance",
      "Name": "PEDS silent/off",
      "Ordinal": 14,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 367,
      "AircraftSection": "LEAD",
      "Category": "I. Safety",
      "SubCategory": "2. Safety Compliance",
      "Name": "Compliance to exit row requirements",
      "Ordinal": 15,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 368,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "6. Communication skills",
      "Name": "Appropriate use of the English Language",
      "Ordinal": 1,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 369,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "6. Communication skills",
      "Name": "Appropriate non-verbal language (facial expressions, gestures, silence)",
      "Ordinal": 2,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 370,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "6. Communication skills",
      "Name": "Face the guest and pay attention to speaker",
      "Ordinal": 3,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 371,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "6. Communication skills",
      "Name": "Clarifying statements given",
      "Ordinal": 4,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 372,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "6. Communication skills",
      "Name": "Listening skills (Focus on instructions given and discussions held)",
      "Ordinal": 5,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 373,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "6. Communication skills",
      "Name": "Listening to announcements (live/IPRAM), calls, and chimes.",
      "Ordinal": 6,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 374,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "6. Communication skills",
      "Name": "Appropriate verbal language (PRUVIT, response to guests needs and queries)",
      "Ordinal": 7,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 375,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "6. Communication skills",
      "Name": "Adjusting to their level when conversing.",
      "Ordinal": 8,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 376,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "6. Communication skills",
      "Name": "Professional language and not street words are used",
      "Ordinal": 9,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 377,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "6. Communication skills",
      "Name": "Others",
      "Ordinal": 10,
      "ParentItem_Id": null,
      "WithRemarks": true
  },
  {
      "Id": 378,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "7. Conflict Resolution Skills",
      "Name": "Appropriate response to guests complaints and issues",
      "Ordinal": 1,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 379,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "7. Conflict Resolution Skills",
      "Name": "Apologized appropriately",
      "Ordinal": 2,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 380,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "7. Conflict Resolution Skills",
      "Name": "Using PLUS for guests concerns",
      "Ordinal": 3,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 381,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "7. Conflict Resolution Skills",
      "Name": "Handled unusual situations accordingly",
      "Ordinal": 4,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 382,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "7. Conflict Resolution Skills",
      "Name": "Dealt with difficult customers skillfully",
      "Ordinal": 5,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 383,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "7. Conflict Resolution Skills",
      "Name": "Actively sought feedback than waiting for complaints",
      "Ordinal": 6,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 384,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "7. Conflict Resolution Skills",
      "Name": "Initiate Passenger Recovery or First contact response",
      "Ordinal": 7,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 385,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "7. Conflict Resolution Skills",
      "Name": "Others",
      "Ordinal": 8,
      "ParentItem_Id": null,
      "WithRemarks": true
  },
  {
      "Id": 386,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "8. Professional Branding (Appearance and Grooming)",
      "Name": "Followed and Maintained proper hair standards",
      "Ordinal": 1,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 387,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "8. Professional Branding (Appearance and Grooming)",
      "Name": "Followed and Maintained proper makeup standards",
      "Ordinal": 2,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 388,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "8. Professional Branding (Appearance and Grooming)",
      "Name": "Complete Uniform",
      "Ordinal": 3,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 389,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "8. Professional Branding (Appearance and Grooming)",
      "Name": "Uniform is free of from stains, snags and tears. Clean, neat and well-pressed.",
      "Ordinal": 4,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 390,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "8. Professional Branding (Appearance and Grooming)",
      "Name": "Health and Hygiene",
      "Ordinal": 5,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 391,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "8. Professional Branding (Appearance and Grooming)",
      "Name": "Proper Decorum",
      "Ordinal": 6,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 392,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "8. Professional Branding (Appearance and Grooming)",
      "Name": "Others",
      "Ordinal": 7,
      "ParentItem_Id": null,
      "WithRemarks": true
  },
  {
      "Id": 393,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "9. Professional Attitude",
      "Name": "Reported early and well-prepared",
      "Ordinal": 1,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 394,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "9. Professional Attitude",
      "Name": "Confident and elegant.",
      "Ordinal": 2,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 395,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "9. Professional Attitude",
      "Name": "Receives feedback appropriately",
      "Ordinal": 3,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 396,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "9. Professional Attitude",
      "Name": "Positive, pleasant and enthusiastic",
      "Ordinal": 4,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 397,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "9. Professional Attitude",
      "Name": "Good rapport with colleagues",
      "Ordinal": 5,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 398,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "9. Professional Attitude",
      "Name": "Motivates others",
      "Ordinal": 6,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 399,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "9. Professional Attitude",
      "Name": "Handles unusual situations well",
      "Ordinal": 7,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 400,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "9. Professional Attitude",
      "Name": "Gives appropriate feedback to co-crew",
      "Ordinal": 8,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 401,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "9. Professional Attitude",
      "Name": "Works well under pressure",
      "Ordinal": 9,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 402,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "9. Professional Attitude",
      "Name": "Galley noise management",
      "Ordinal": 10,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 403,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "9. Professional Attitude",
      "Name": "Presents a calm and controlled image to guests during unusual situations",
      "Ordinal": 11,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 404,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "9. Professional Attitude",
      "Name": "Willingness to learn, works with minimal supervision",
      "Ordinal": 12,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 405,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "9. Professional Attitude",
      "Name": "Others",
      "Ordinal": 13,
      "ParentItem_Id": null,
      "WithRemarks": true
  },
  {
      "Id": 406,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "10. Effective Practice of CRM",
      "Name": "No seniority",
      "Ordinal": 1,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 407,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "10. Effective Practice of CRM",
      "Name": "Use of Standard Communication between FD and CC",
      "Ordinal": 2,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 408,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "10. Effective Practice of CRM",
      "Name": "Visiting/Contacting the FD on regular intervals, as established during the briefing",
      "Ordinal": 3,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 409,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "10. Effective Practice of CRM",
      "Name": "First name basis if possible/if established",
      "Ordinal": 4,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 410,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "10. Effective Practice of CRM",
      "Name": "Good communication established (CC-FD-CC)",
      "Ordinal": 5,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 411,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "10. Effective Practice of CRM",
      "Name": "Good working relationship with co-crew and colleagues",
      "Ordinal": 6,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 412,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "10. Effective Practice of CRM",
      "Name": "Good rapport with internal customers (catering, ground personnel, cleaners, security personnel)",
      "Ordinal": 7,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 413,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "10. Effective Practice of CRM",
      "Name": "Initiative in assisting colleagues on other tasks",
      "Ordinal": 8,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 414,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "10. Effective Practice of CRM",
      "Name": "Heightened Situational Awareness",
      "Ordinal": 9,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 415,
      "AircraftSection": "LEAD",
      "Category": "II. Customer Service",
      "SubCategory": "10. Effective Practice of CRM",
      "Name": "Others",
      "Ordinal": 10,
      "ParentItem_Id": null,
      "WithRemarks": true
  },
  {
      "Id": 416,
      "AircraftSection": "LEAD",
      "Category": "III. Duties and Responsibilities",
      "SubCategory": "12. Specific duties Accomplished",
      "Name": "Cabin management",
      "Ordinal": 5,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 417,
      "AircraftSection": "LEAD",
      "Category": "III. Duties and Responsibilities",
      "SubCategory": "12. Specific duties Accomplished",
      "Name": "Briefing of Exit row",
      "Ordinal": 6,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 418,
      "AircraftSection": "LEAD",
      "Category": "III. Duties and Responsibilities",
      "SubCategory": "12. Specific duties Accomplished",
      "Name": "Giving of Infant���s Lifevest",
      "Ordinal": 7,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 419,
      "AircraftSection": "LEAD",
      "Category": "III. Duties and Responsibilities",
      "SubCategory": "12. Specific duties Accomplished",
      "Name": "Attend to FD needs",
      "Ordinal": 8,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 420,
      "AircraftSection": "LEAD",
      "Category": "III. Duties and Responsibilities",
      "SubCategory": "12. Specific duties Accomplished",
      "Name": "Providing baby bassinet, if applicable",
      "Ordinal": 9,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 421,
      "AircraftSection": "LEAD",
      "Category": "III. Duties and Responsibilities",
      "SubCategory": "12. Specific duties Accomplished",
      "Name": "Proper Endorsement of Sales",
      "Ordinal": 10,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 422,
      "AircraftSection": "LEAD",
      "Category": "III. Duties and Responsibilities",
      "SubCategory": "12. Specific duties Accomplished",
      "Name": "Proper Resources (IPAD) and Equipment Handling",
      "Ordinal": 11,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 423,
      "AircraftSection": "LEAD",
      "Category": "III. Duties and Responsibilities",
      "SubCategory": "12. Specific duties Accomplished",
      "Name": "Appropriate Checklists and documents accomplished (catering, fun flight etc)",
      "Ordinal": 12,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 424,
      "AircraftSection": "LEAD",
      "Category": "III. Duties and Responsibilities",
      "SubCategory": "12. Specific duties Accomplished",
      "Name": "Others",
      "Ordinal": 13,
      "ParentItem_Id": null,
      "WithRemarks": true
  },
  {
      "Id": 425,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "13. Safety Briefing",
      "Name": "Discussion of clear delegation of tasks",
      "Ordinal": 6,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 426,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "13. Safety Briefing",
      "Name": "Establishing teamwork",
      "Ordinal": 7,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 427,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "13. Safety Briefing",
      "Name": "Defined and clear procedures, goals and expectations",
      "Ordinal": 8,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 428,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "13. Safety Briefing",
      "Name": "Discussing and ensuring correct understanding of new memos and manual revisions",
      "Ordinal": 9,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 429,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "13. Safety Briefing",
      "Name": "Grooming check",
      "Ordinal": 10,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 430,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "13. Safety Briefing",
      "Name": "Room for questions and feedback",
      "Ordinal": 11,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 431,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "13. Safety Briefing",
      "Name": "Allows and provides crew debriefing (correct errors constructively and individually, praise collectively)",
      "Ordinal": 12,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 432,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "13. Safety Briefing",
      "Name": "Others",
      "Ordinal": 13,
      "ParentItem_Id": null,
      "WithRemarks": true
  },
  {
      "Id": 433,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "14. Lead by Example",
      "Name": "Responsible for proper conduct and coordination of cabin crew in the airport and during normal operations",
      "Ordinal": 1,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 434,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "14. Lead by Example",
      "Name": "Displays role model qualities",
      "Ordinal": 2,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 435,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "14. Lead by Example",
      "Name": "Considers crew well-being, expresses concern, provides options",
      "Ordinal": 3,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 436,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "14. Lead by Example",
      "Name": "Prioritizes tasks",
      "Ordinal": 4,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 437,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "14. Lead by Example",
      "Name": "Mastery of safety knowledge and procedures",
      "Ordinal": 5,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 438,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "14. Lead by Example",
      "Name": "Ensure all complies with the SOP",
      "Ordinal": 6,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 439,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "14. Lead by Example",
      "Name": "Understands authority and responsibility for the flight",
      "Ordinal": 7,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 440,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "14. Lead by Example",
      "Name": "Ability to motivate and mentor others (Provides purpose, direction, supervision and coordination)",
      "Ordinal": 8,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 441,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "14. Lead by Example",
      "Name": "Ability to meet objectives",
      "Ordinal": 9,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 442,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "14. Lead by Example",
      "Name": "Monitor and give direct feedback when and where necessary",
      "Ordinal": 10,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 443,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "14. Lead by Example",
      "Name": "Recognize and praise performance where appropriate",
      "Ordinal": 11,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 444,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "14. Lead by Example",
      "Name": "Delegation of leadership task during inflight rest period or other unusual situations.",
      "Ordinal": 12,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 445,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "14. Lead by Example",
      "Name": "Others",
      "Ordinal": 13,
      "ParentItem_Id": null,
      "WithRemarks": true
  },
  {
      "Id": 446,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "15. Command in the Cabin",
      "Name": "Minimizes cabin disruption",
      "Ordinal": 1,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 447,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "15. Command in the Cabin",
      "Name": "Compliance with Refueling Procedures",
      "Ordinal": 2,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 448,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "15. Command in the Cabin",
      "Name": "Proper crew management and delegation of tasks Ensures cabin zones are manned",
      "Ordinal": 3,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 449,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "15. Command in the Cabin",
      "Name": "Solution-focused on Unusual Situations",
      "Ordinal": 4,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 450,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "15. Command in the Cabin",
      "Name": "Visibility in the cabin to ensure smoothness of service flow",
      "Ordinal": 5,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 451,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "15. Command in the Cabin",
      "Name": "Decision-making skills (Turbulence, Diversion, Unusual Situations)",
      "Ordinal": 6,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 452,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "15. Command in the Cabin",
      "Name": "Consults with others to develop a common and unified strategy. With consensus of crew members when appropriate.",
      "Ordinal": 7,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 453,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "15. Command in the Cabin",
      "Name": "Correct gathering and dissemination of information.",
      "Ordinal": 8,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 454,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "15. Command in the Cabin",
      "Name": "Reporting Safety and Security matters to the FD when necessary",
      "Ordinal": 9,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 455,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "15. Command in the Cabin",
      "Name": "Others",
      "Ordinal": 10,
      "ParentItem_Id": null,
      "WithRemarks": true
  },
  {
      "Id": 456,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "16. Task Accountability",
      "Name": "A/C manuals are updated and complete Checking of CML and equipment discrepancies are logged.",
      "Ordinal": 1,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 457,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "16. Task Accountability",
      "Name": "Ensures availability of all required documents and forms prior to closing the door",
      "Ordinal": 2,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 458,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "16. Task Accountability",
      "Name": "Ensures equipment in the cabin are complete and meet the quality and quantity requirements",
      "Ordinal": 3,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 459,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "16. Task Accountability",
      "Name": "Ensures all supplies are complete and meet the quality and quantity requirements",
      "Ordinal": 4,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 460,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "16. Task Accountability",
      "Name": "Proper endorsement of Special Handling Cases",
      "Ordinal": 5,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 461,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "16. Task Accountability",
      "Name": "Proper use of resources",
      "Ordinal": 6,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 462,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "16. Task Accountability",
      "Name": "Others",
      "Ordinal": 7,
      "ParentItem_Id": null,
      "WithRemarks": true
  },
  {
      "Id": 463,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "17. Delivery of Announcement",
      "Name": "Complete and clear announcements by adhering to the standard guide",
      "Ordinal": 1,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 464,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "17. Delivery of Announcement",
      "Name": "Correct Pitch, Rate, Understandability (Pronunciation), Volume, Inflection, Tone",
      "Ordinal": 2,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 465,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "17. Delivery of Announcement",
      "Name": "Appropriate announcements are delivered promptly",
      "Ordinal": 3,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 466,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "17. Delivery of Announcement",
      "Name": "Impromptu announcements are done correctly when needed",
      "Ordinal": 4,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 467,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "17. Delivery of Announcement",
      "Name": "Others",
      "Ordinal": 5,
      "ParentItem_Id": null,
      "WithRemarks": true
  },
  {
      "Id": 468,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "18. Reports and Forms Accomplishment",
      "Name": "Sound written communication skills",
      "Ordinal": 1,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 469,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "18. Reports and Forms Accomplishment",
      "Name": "Flight Report",
      "Ordinal": 2,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 470,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "18. Reports and Forms Accomplishment",
      "Name": "Incident Report, when applicable",
      "Ordinal": 3,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 471,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "18. Reports and Forms Accomplishment",
      "Name": "Intelex",
      "Ordinal": 4,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 472,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "18. Reports and Forms Accomplishment",
      "Name": "Left Behind Forms",
      "Ordinal": 5,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 473,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "18. Reports and Forms Accomplishment",
      "Name": "Knowledge on Confidential Report Form",
      "Ordinal": 6,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 474,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "18. Reports and Forms Accomplishment",
      "Name": "General Declaration",
      "Ordinal": 7,
      "ParentItem_Id": null,
      "WithRemarks": false
  },
  {
      "Id": 475,
      "AircraftSection": "LEAD",
      "Category": "IV. Lead Cabin Crew Leadership Skills",
      "SubCategory": "18. Reports and Forms Accomplishment",
      "Name": "Others",
      "Ordinal": 8,
      "ParentItem_Id": null,
      "WithRemarks": true
  }
]

// arrange per subcategory
var pickedItemsPerSubCategory = predefinedEvaluationItems.map(values => {  
  const container = {};
  if(!values.ParentItem_Id){
    container.SubCategory = values.SubCategory;
    container.Id = values.Id ;
    container.Name = values.Name;
    container.Ordinal = values.Ordinal;
    container.WithRemarks = values.WithRemarks;
    if(values.Id === values.ParentItem_Id){
      container.Value = null;
      container.Items = [
        { Id: values.Id,
          Name: values.Name,
          Ordinal: values.Ordinal,
          Value: "YES"
        }
      ]
    }
    else {
      container.Value = "YES";
      container.Items = [];
    }
    
  }
  return container;
}
).filter(Boolean)

//console.log(pickedItemsPerSubCategory)

// create objects groups per subcategory
var itemsReduced = pickedItemsPerSubCategory.reduce(function (r, a) {
  r[a.SubCategory] = r[a.SubCategory] || [];
  //r[a.SubCategory].push(a);
  r[a.SubCategory].push({Id:a.Id,Name:a.Name,Ordinal:a.Ordinal,Value:a.Value });
  return r;
}, Object.create(null))

//console.log('Subcat',itemsReduced)

// arrange per category
 var pickedColumns = predefinedEvaluationItems.map(values =>{  
                const container = {};
                container.Category = values.Category;
                container.SubCategory = values.SubCategory;
                return container;
              }
            )

//console.log('Cat',pickedColumns)

// distinct category and subcategory
var uniqueValues = pickedColumns.reduce((unique, o) => {
  if(!unique.some(obj => obj.Category === o.Category && obj.SubCategory === o.SubCategory)) {
    unique.push(o);
  }
  return unique;
},[]);
 
//console.log('unique',uniqueValues)

// sort per subcategory
const ordered = uniqueValues.sort((a,b) => 
    a.Category.localeCompare(b.Category) || a.SubCategory.localeCompare(b.SubCategory))

// console.log('order',ordered)

// map final result
var chkCategory = "", Itemlist = []; 
const dataMapped = ordered.map((data, index) => {
    var container = {};
      // search objects in objects
      var subcatList = [];
      if(itemsReduced) { 
      Object.entries(itemsReduced).forEach(([key, val]) => { 
        if (ordered[index].SubCategory === key) {
          //console.log('for',key, val)
          subcatList = val;
        }
      }
      )

    // alternative
    // Object.keys(itemsReduced).forEach(function(key) {
    //   console.log(key, itemsReduced[key]);
    //   if (ordered[index].SubCategory === key) {
    //          //console.log('for',key, val)
    //          subcatList = itemsReduced[key];
    //        }
          
    // });
  }
      //console.log(subcatList)
    if (chkCategory !== data.Category){
        
        if (chkCategory === ""){
          Itemlist.push({Name:ordered[index].SubCategory, 
              Items:subcatList
            });
            chkCategory = data.Category; 
            return null;
        }
        
        container.Name = chkCategory;
        container.Items = Itemlist;
        chkCategory = data.Category; 
        Itemlist = []; 
        Itemlist.push({Name:ordered[index].SubCategory, Items:subcatList}); 
        return container ;
    }
    else if (ordered.length - 1 === index){
        Itemlist.push({Name:ordered[index].SubCategory, Items:subcatList});
        container.Name = chkCategory;
        container.Items = Itemlist;
        return container;
    }
    else {
        Itemlist.push({Name:ordered[index].SubCategory, Items:subcatList});
        return null;
    }
}).filter(Boolean);


//console.log(Itemlist)
console.log('map ---------',dataMapped);
