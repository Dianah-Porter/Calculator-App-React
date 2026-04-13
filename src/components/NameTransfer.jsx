import { useState, useEffect } from "react";
const NameTransferLists = () => {
const firstList = [
"Alice Johnson",
"Bob Smith",
"Charlie Brown",
"Diana Prince",
"Ethan Hunt",
];

const [initialList, SetInitialList] = useState(firstList)
const [secondList, setSecondList] = useState([]);

useEffect(()=> {
  let interval = setInterval(()=>{
    if(initialList.length === 0) return;
      setSecondList([...secondList, initialList[0]]);
      SetInitialList(initialList.slice(1));
  } ,2000)
return ()=> clearInterval(interval);
},[initialList, secondList])

return (
<div className="max-w-4xl mx-auto p-8">
<div className="grid grid-cols-2 gap-8">
{/* First List */}
<div className="bg-blue-100 p-6 rounded-lg">
<h2 className="text-xl font-bold text-blue-800 mb-4">First List</h2>
<ul className="space-y-2">
{initialList.map((name, index) => (
<li key={`first-${name}-${index}`} className="text-blue-700">
{name}
</li>
))}
</ul>
</div>
   {/* Second List */}
    <div className="bg-green-100 p-6 rounded-lg">
      <h2 className="text-xl font-bold text-green-800 mb-4">Second List</h2>
      <ul className="space-y-2">
        {secondList.map((name, index) => (
          <li key={`second-${name}-${index}`} className="text-green-700">
            {name}
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>
);
};

export default NameTransferLists;