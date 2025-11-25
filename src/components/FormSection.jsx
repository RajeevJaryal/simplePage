import "./FormSection.css";
const FormSection=()=>{
    return(
        <section>
        <form>
            <input type="text" placeholder="Your Name"/>
            <input type="password" placeholder="password"/>
            <input type="email" placeholder="email"/> 
            <button type="submit">Submit</button>
        </form>
        </section>
    )
}
export default FormSection;