import coPatronImg from '../../public/co_patron.jpg'
import coPatronImg2 from '../../public/ProfRohitMehra.jpg'

export default function PatronCopatron() {
    function PersonSection(props) {
        return (
            <div className="flex flex-row w-[95%] sm:w-[31vw] items-center justify-between gap-4 p-4 shadow-lg rounded-xl border border-[#66ac8a] border-2">
                <div className='w-[40%]'>
                    <img src={props.img} 
                        className="rounded h-[100px]"
                        alt="patron/copatron"/>
                </div>
                <div className='flex flex-col w-[60%]'>
                    <p className="font-bold text-[1.25rem] text-[#214d3c] underline" >{props.caption}</p>
                    <p className='font-bold text-[0.85rem]'>{props.name}</p>
                    <p className='font-medium text-[0.75rem]'>{props.post}</p>
                </div>
            </div>
        )
    }
    return (
        <>
        <h2 className="text-4xl text-accent-50 font-bold mb-4 bg-accent-800 w-full mt-28 py-2 text-center">
        Organizing Heads
        </h2>
        <div className='flex-col flex gap-4 pt-[40px]'>
        <div className="flex sm:flex-row flex-col gap-4 flex-wrap items-center justify-evenly">
            <PersonSection 
                name='Prof. Binod Kumar Kanaujia' 
                post='Director, NIT Jalandhar & Faculty Advisor, IEEE Student Branch NIT Jalandahar' 
                caption="Patron" 
                img={'https://v1.nitj.ac.in/images/admin_page/Director/Director.jpg'} />
        </div>
        <div className="flex sm:flex-row flex-col gap-4 flex-wrap items-center justify-evenly">
            <PersonSection 
                name='Prof. Ajay Bansal' 
                post='Registrar (I/C), NIT Jalandhar' 
                caption="Co-Patron" 
                img={'https://v1.nitj.ac.in/images/admin_page/Registrar/NITJ_Registrar.jpg'} />
            <PersonSection 
                name='Prof. A Q Ansari' 
                post='Chair, IEEE Delhi Section' 
                caption="Co-Patron" 
                img={coPatronImg} />
            <PersonSection 
                name='Prof. Rohit Mehra' 
                post='Dean (R&C), NIT Jalandhar' 
                caption="Co-Patron" 
                img={coPatronImg2} />
        </div>
        </div>
        </>
    )
}
