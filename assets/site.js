function toggleMobileMenu(){
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('hamburger');
  menu.classList.toggle('open');
  btn.classList.toggle('open');
}
function closeMobileMenu(){
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('hamburger');
  if(menu) menu.classList.remove('open');
  if(btn) btn.classList.remove('open');
}
document.addEventListener('click', function(e){
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('hamburger');
  if(menu && menu.classList.contains('open') && !menu.contains(e.target) && !btn.contains(e.target)){
    closeMobileMenu();
  }
});

// Mobile tap support for session descriptions
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.session-block').forEach(function(block){
    block.addEventListener('click', function(){
      this.classList.toggle('tapped');
    });
  });
});

var speakerBios = {
  'Abbigail Brown': {org: `CPM Logistics`, bio: `Ms. Brown has over two decades of experience in the fields of Program Construction and Project Management with specific emphasis on public projects. She focuses on program and construction management for heavy civil and transportation projects and specializes in providing support to contractors and private companies managing new and existing construction projects.`},
  'Adan Ortega Jr.': {org: `Metropolitan Water District`, bio: `In January 2023, Adan Ortega, Jr. was sworn in as the 20th chair of Metropolitan's Board of Directors, quickly organizing the board to meet the challenge of adapting to climate change. He is the first Latino to lead the board in the district's 95-year history and the first to appoint a large majority of women to the Board's Executive Committee. He is a former member of the California Water Commission and the California State Board of Food and Agriculture.`},
  'Alexander Santamaria': {org: `Santamaria Concrete`, bio: `Alexander is a dedicated leader in the construction industry and proudly serves as President of Santamaria Concrete. With degrees in Supply Chain and Operations Management and over ten years of valuable industry experience, he combines strategic insight with a genuine passion for safety and innovation.`},
  'Amy Fong': {org: `Caltrans`, bio: `Amy Fong serves as the Caltrans Building Information Modeling for Infrastructure (BIM4I) Delivery & Guidance Manager within the BIM4I Program of the Division of Project Management. In this role, she leads the BIM4I Delivery & Guidance Office and is responsible for developing policies, procedures, and guidance to support statewide BIM4I implementation.`},
  'Anna Carno': {org: `Carno Law Group`, bio: `Anna Carno serves as Senior Advisor, Agency Relations at UCON while leading Carno Law Group. She represents UCON across key state and local agencies, driving solutions and ensuring contractors have a strong voice where decisions are made. A respected construction attorney with more than 25 years of experience in agency policy and regulatory matters, Anna is a trusted advocate who understands contractors' real-world challenges and works relentlessly to solve them.`},
  'Anthony Lino': {org: `Sully-Miller`, bio: `Anthony began his career in construction 19 years ago and serves as Director of Pre-Construction at Sully-Miller Contracting. He is passionate about mentoring and inclusivity, speaks at schools throughout Los Angeles and Orange County, and was a mentor in the inaugural Mentor Protege Cohort for Caltrans Districts 7 and 12.`},
  'Armond Morad': {org: `Port of Long Beach`, bio: `Armond Morad is Manager of Engineering in the Construction Management Division at the Port of Long Beach. A registered civil engineer with over 25 years of experience, he leads the Port's multi-disciplinary Infrastructure Group, overseeing complex capital projects including the Pier G Wharf Extension.`},
  'Bill Boyd': {org: `Sully-Miller`, bio: `Bill Boyd is a senior leader at Sully-Miller Contracting Company, one of Southern California's leading heavy civil contractors. He participates in the Recruitment and Retention Strategies in Construction panel at the 2026 Public Works Summit, sharing best practices for attracting and retaining talent in public works.`},
  'Bonny Nyaga': {org: `Caltrans / CalSTA`, bio: `Bonny Nyaga, on loan from Caltrans to CalSTA, serves as International Policy Advisor to the Secretary of Transportation. A Principal Transportation Engineer with over two decades at Caltrans, he oversees the Caltrans Construction Mentor Protege Program (CMPP), advancing the participation and growth of Small and Disadvantaged Business Enterprises.`},
  'Charley Wilson': {org: `SoCal Water Coalition`, bio: `Charles Wilson is Executive Director and CEO of the Southern California Water Coalition, a nonprofit dedicated to advancing public understanding of California's water resources. He has more than 30 years of leadership in the water and energy sectors and hosts What Matters Water TV and Podcast.`},
  'Christy Connors': {org: `Caltrans District 8`, bio: `Christy Connors is the District 8 Deputy District Director for Construction for Caltrans, overseeing project delivery and construction administration for approximately 300 staff working on 80 projects totaling $1.5 billion. A Licensed Civil Engineer and PMP, she has been with Caltrans for 32 years.`},
  'Clay O\'Neal': {org: `United Contractors`, bio: `Clay O'Neal is the Chief Operating Officer of United Contractors and leads the Southern California office. He is dedicated to cultivating genuine relationships and improving the business environment for UCON's members.`},
  'David Kim': {org: `LAWA`, bio: `David J. Kim, R.A. is the Acting Director of Airport Development Program for Los Angeles World Airports (LAWA). A licensed architect, he has been in aviation planning, design, and construction for over 18 years, managing multiple billion-dollar capital improvement projects/programs at LAWA. He is currently overseeing the multi-billion-dollar programs for Landside and Roadway improvements surrounding LAX. Prior to LAWA, he managed design and construction for public work buildings for the City of Los Angeles including libraries, LAPD police stations, and the LAPD Headquarters Facility. Mr. Kim was also a captain in the US Army with two overseas deployments. He is a graduate of USC, a registered architect in California and Hawaii, and an AAAE and DBIA member.`},
  'Curtis Germany II': {org: `LADWP`, bio: `Curtis Germany II is the Assistant General Manager of Human Resources at the Los Angeles Department of Water and Power (LADWP), the nation's largest municipal utility. With nearly two decades of experience leading people strategy, labor relations, workforce development, and organizational transformation across large public-sector and utility organizations, his expertise spans workforce planning, talent acquisition, organizational development, employee engagement, and labor negotiations. He has previously held senior leadership roles at Clark County Nevada, Southern California Edison, the City of Henderson, and the Riverside Superior Court. Curtis holds an MBA from the University of Redlands and a BA from CSU San Bernardino, and is a recognized voice in HR innovation, workforce strategy, and leadership development.`},
  'David DeLuz': {org: `Caltrans`, bio: `David DeLuz serves as the Deputy Director for Civil Rights at the California Department of Transportation (Caltrans), overseeing the Disadvantaged Business Enterprise (DBE), Small Business, and Disabled Veteran Business Enterprise programs. With over 20 years of leadership experience, he is a respected authority in civil rights, equity, small business and community development.`},
  'Elizabeth Torrez': {org: `Tenna`, bio: `Elizabeth Torrez is Tenna's Regional Director for California, Hawaii, Alaska, and Oregon, with more than 21 years of experience in the construction industry. She supported major projects including SoFi Stadium, LAX ConRAC, and the Disneyland Star Wars expansion.`},
  'Emily Cohen': {org: `United Contractors`, bio: `Emily Cohen is the CEO of United Contractors (UCON), leading one of California's most influential construction trade organizations representing union signatory contractors statewide. With more than 16 years of experience driving policy, advocacy, and organizational growth, Emily has secured billions in infrastructure funding, advanced landmark legislation, and strengthened the economic environment for UCON's 800+ members. A trusted coalition builder, she brings contractors, labor leaders, agencies, and elected officials together to move the industry forward.`},
  'Gus Flores': {org: `United Contractors`, bio: `Gus Flores serves as Director of Government Relations at United Contractors. With extensive expertise in policy research, strategic communications, coalition building, and grassroots advocacy, he is committed to delivering impactful results across transportation and infrastructure policy by creating effective outreach campaigns and mobilizing grassroots support.`},
  'Jennifer Galenti': {org: `United Contractors`, bio: `Jennifer Galenti is the Director of Executive Affairs at United Contractors (UCON), where she partners closely with the CEO to drive organizational execution, alignment, and impact across the association. She previously served as Director of Operations for the California Alliance for Jobs, overseeing executive operations, internal systems, and strategic initiatives for one of the most influential labor-management organizations in the nation. Earlier in her career, she worked in the California State Senate, including with the Office of the President Pro Tempore and the Senate Judiciary Committee. Known for her strong relationships and operational discipline, Jennifer is committed to strengthening results on behalf of UCON members across the state.`},
  'John Yang': {org: `Caltrans District 7`, bio: `John Yang is the Deputy District Director for the Construction Division for Caltrans District 7. With 34 years at District 7, he oversees project delivery across Los Angeles and Ventura counties, one of the largest and most complex Caltrans districts in the state.`},
  'Jon Switalski': {org: `Rebuild SoCal Partnership`, bio: `Since June 2021, Jon Switalski has served as Executive Director of the Rebuild SoCal Partnership. Drawing on over 20 years of government affairs experience, Jon collaborates with stakeholders to advance pro-infrastructure policy that creates jobs and opportunity in the construction trades.`},
  'Kiana Valentine': {org: `Transportation California`, bio: `Kiana Valentine, Partner with Politico Group, has more than 20 years of policy experience in transportation, housing, land use, and local government. She played a key role in the passage of SB 1 - the Road Repair and Accountability Act of 2017 and previously spent 12 years at the California State Association of Counties.`},
  'Lorraine Aldridge': {org: `LA Metro`, bio: `Lorraine E. Aldridge is a Small Business Program Director with the Los Angeles Metropolitan Transportation Authority (Metro). A dedicated community advocate, she fosters economic equity for small businesses that support the local transportation and construction industry. With over fifteen years as a champion for the small business community, Lorraine brings an enthusiastic drive for encouraging meaningful relationships while ensuring small business program compliance. Her motto: 'Small businesses make a huge difference.'`},
  'Louis Rubalcaba': {org: `LADWP`, bio: `Louis Rubalcaba represents the Los Angeles Department of Water and Power (LADWP) and participates in the Agency Programs (LAWA, POLB, POLA, LADWP) panel at the 2026 Public Works Summit, sharing upcoming capital programs and construction opportunities at LADWP.`},
  'Mark Schniepp PhD': {org: `California Economic Forecast`, bio: `Dr. Mark Schniepp is Director of the California Economic Forecast in Santa Barbara, preparing forecasts for organizations including Caltrans, Kaiser Permanente, and the Southern California Association of Governments. He participates with the UCLA Anderson Forecast on the annual Orange County and San Diego County Economic Forecasts, and presents economic and demographic analysis at over 25 conferences annually. He previously served as senior economist to the California State Controller and as Director of the Economic Forecast Project at UC Santa Barbara, where he also taught economics from 1982 to 1991. Dr. Schniepp received his Ph.D. from UC Santa Barbara in 1985.`},
  'Michael Donlon': {org: `MD Safety Service`, bio: `Michael Donlon, PE, CSP is the principal at MD Safety Service. He spent 16 years at Cal/OSHA specializing in industrial, construction, and electrical safety, and previously served as Chief Safety Officer at the Department of Water Resources. He is a Registered Professional Engineer and Certified Safety Professional.`},
  'Nicole England': {org: `Teichert Construction`, bio: `Nicole England leads business development for Collaborative Delivery and Public Works at Teichert Construction. She has been instrumental in expanding Teichert's presence across transportation, water, and flood protection sectors, and has been an active participant in the Caltrans Mentor-Protege Program.`},
  'Sarah Tacker': {org: `Shimmick Construction Company, Inc.`, bio: `Sarah Tacker is Executive Vice President and Chief Operating Officer at Shimmick Construction Company, Inc., bringing 27 years of experience in the heavy civil construction industry. She has contributed to and led some of California's most iconic infrastructure projects, including the San Francisco-Oakland Bay Bridge Skyway and the Presidio Parkway Project. Sarah is an active member of the Beavers Organization's Women in Heavy Civil Committee, advancing women-focused scholarships, networking, and leadership development. She holds a B.S. in Civil Engineering from Tulane University.`},
  'Shaun Shahrestani': {org: `Port of Los Angeles`, bio: `Shaun Shahrestani represents the Port of Los Angeles, one of the busiest container ports in North America. He participates in the Agency Programs (LAWA, POLB, POLA, LADWP) panel at the 2026 Public Works Summit, sharing upcoming capital programs and construction opportunities.`},
  'Son Nguyen': {org: `Caltrans District 12`, bio: `Son Nguyen is the Office Chief of Construction for Caltrans District 12 in Orange County. A licensed PE and PMP with over 30 years of experience, he has worked at Caltrans for over 23 years overseeing major projects including the I-5, SR-91, and SR-55 widenings.`},
  'Susan Kennedy': {org: `Cadiz`, bio: `Susan Kennedy is Chairman of the Cadiz Board of Directors and CEO. She has led a distinguished career as a policy-maker and entrepreneur, serving as top advisor to two California Governors, former Commissioner of the California Public Utilities Commission, and founder of a distributed energy company.`},
  'Victor Sella': {org: `United Contractors`, bio: `Victor Sella ensures UCON's 525+ members are getting the most out of UCON's labor relations, government relations, professional development, and networking services. He also provides labor, operations, and HR consulting to members — resolving problems, connecting contractors to opportunities, and helping them stay competitive.`},
};

function openBio(name, imgSrc, initials){
  var data = speakerBios[name] || {org:'', bio:'No bio available.'};
  document.getElementById('bioName').textContent = name;
  document.getElementById('bioOrg').textContent = data.org;
  document.getElementById('bioText').textContent = data.bio;
  var av = document.getElementById('bioAvatar');
  if(imgSrc){
    av.innerHTML = '<img src="'+imgSrc+'" alt="'+name+'" style="width:110px;height:110px;border-radius:50%;object-fit:cover;object-position:top center;border:3px solid rgba(0,129,138,.4);display:block;margin:0 auto;">';
  } else {
    av.innerHTML = '<div class="bio-av">'+initials+'</div>';
  }
  document.getElementById('bioModal').classList.add('open');
}
function toggleCal(el){ el.classList.toggle("open"); document.addEventListener("click", function c(e){ if(!el.contains(e.target)){ el.classList.remove("open"); document.removeEventListener("click",c); } }); }
function closeBio(){
  document.getElementById('bioModal').classList.remove('open');
}


function copyPost(btn, text){
  navigator.clipboard.writeText(text).then(function(){
    var orig = btn.innerHTML;
    btn.innerHTML = '✅ Copied!';
    btn.classList.add('copied');
    setTimeout(function(){ btn.innerHTML = orig; btn.classList.remove('copied'); }, 2000);
  }).catch(function(){
    // Fallback for browsers that block clipboard API
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    var orig = btn.innerHTML;
    btn.innerHTML = '✅ Copied!';
    btn.classList.add('copied');
    setTimeout(function(){ btn.innerHTML = orig; btn.classList.remove('copied'); }, 2000);
  });
}
function toggleAcc(btn){
  var body=btn.nextElementSibling;
  var isOpen=btn.classList.contains('open');
  document.querySelectorAll('.acc-hdr.open').forEach(h=>{
    h.classList.remove('open');
    h.setAttribute('aria-expanded','false');
    h.nextElementSibling.classList.remove('open');
  });
  if(!isOpen){
    btn.classList.add('open');
    btn.setAttribute('aria-expanded','true');
    body.classList.add('open');
  }
}
