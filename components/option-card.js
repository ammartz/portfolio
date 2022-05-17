export default function OptionCard({children}){
return(
    <div className='option-card bg-primary p-2 rounded-lg group'><div className='card-content w-full h-full border-4 border-white rounded-lg border-opacity-0 group-hover:border-opacity-100 group-hover:text-secondary duration-200 text-2xl'>{children}</div></div>
)
}
