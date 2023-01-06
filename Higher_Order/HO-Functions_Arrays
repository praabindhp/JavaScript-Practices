const companies = [{ name: "CompanyOne", category: "Finance", start: 1981, end: 2003 },
    { name: "CompanyTwo", category: "Retail", start: 1992, end: 2008 },
    { name: "CompanyThree", category: "Auto", start: 1999, end: 2007 },
    { name: "CompanyFour", category: "Retail", start: 1989, end: 2010 },
    { name: "CompanyFive", category: "Technology", start: 2009, end: 2014 },
    { name: "CompanySix", category: "Finance", start: 1987, end: 2010 },
    { name: "CompanySeven", category: "Auto", start: 1986, end: 1996 },
    { name: "CompanyEight", category: "Technology", start: 2011, end: 2016 },
    { name: "CompanyNine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

companies.forEach(function(company) {
    console.log(company.name);
})

// Filter
const retailCompanies = companies.filter(company => company.category === "Retail");
console.log(retailCompanies);

const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
console.log(eightiesCompanies);

const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
console.log(lastedTenYears);

// Map
const companyNames = companies.map(function(company) { return company.name; });
console.log(companyNames);

const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(testMap);

const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);
console.log(ageMap);

// Sort
const sortCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortCompanies);

const sortedAges = ages.sort((a, b) => a - b);
console.log(sortedAges);

// Reduce
const totalYears = companies.reduce((total, company) => total += (company.end - company.start), 0);
console.log(totalYears);

// Examples
const combined = ages
    .map(age => age * 2)
    .filter(age => age > 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0)

console.log(combined);