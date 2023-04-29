const companies = ['google', 'facebook', 'microsoft', 'apple'];
const testCharacter='o';
let countOccurrences=0;

for (let i = 0; i < companies.length; i++)
{
    for (let x = 0; x < companies[i].length; x++)
    {
        if (companies[i][x]==testCharacter)
        {
            countOccurrences++;
        }
    }
    console.log(countOccurrences);
}
