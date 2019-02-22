/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count=0;
	preferences.unshift(0);
 	for(let i=1;i<preferences.length-2;i++)
 	{
 		for(let j=i+1;j<preferences.length-1;j++)
 		{
 			for(let k=j+1;k<preferences.length;k++)
 			{
         if((preferences[k]===i && preferences[j]===k && preferences[i]===j) 
         || (preferences[j]===i && preferences[k]===j && preferences[i]===k) )
 					  count++; 				 				
 			}
 		}
 	}
 	return count;
};
