const companies = ['google', 'facebook', 'microsoft', 'apple'];
const testCharacter='o';

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
    console.log(countOccurrences);
}
