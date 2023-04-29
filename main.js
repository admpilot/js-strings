const companies = ['google', 'facebook', 'microsoft', 'apple', 'adobe'];
const testCharacter='o';
let filteredCompanies = [];

for (let i = 0; i < companies.length; i++)
{
    let countOccurrences=0;

    for (let x = 0; x < companies[i].length; x++)
    {
        if (companies[i][x]==testCharacter)
        {
            countOccurrences++;
        }
    }
    if (countOccurrences<=1)
    {
        filteredCompanies.push(companies[i]);
    }
    console.log(filteredCompanies);
}
