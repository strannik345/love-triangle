/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count=0;
	list.unshift(0);
 	for(let i=1;i<list.length-2;i++)
 	{
 		for(let j=i+1;j<list.length-1;j++)
 		{
 			for(let k=j+1;k<list.length;k++)
 			{
 				if((list[k]===i && list[j]===k && list[i]===j) || (list[j]===i && list[k]===j && list[i]===k) )
 				{
 					console.log(list[i],i,list[j],j,list[k],k);
 					count++;
 				} 				
 			}
 		}
 	}
 	return count;
};
