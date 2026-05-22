function FormulaireContact() {
    return (

        <section className="bg-[#F9FAFF] p-8 rounded-2xl max-w-xl mx-auto font-sans text-[#25282B]">


            <div className="mb-6">
                <label className="block font-medium mb-2">Name</label>
                <input
                    type="text"
                    className="w-full bg-white border border-[#E0E4EC] rounded-xl px-4 py-3 outline-none focus:border-[#FDC435] transition-colors"
                />
            </div>


            <div className="mb-6">
                <label className="block font-medium mb-2">Email</label>
                <input
                    type="email"
                    className="w-full bg-white border border-[#E0E4EC] rounded-xl px-4 py-3 outline-none focus:border-[#FDC435] transition-colors"
                />
            </div>


            <div className="mb-6">
                <label className="block font-medium mb-2">Message</label>
                <textarea
                    rows="6"
                    className="w-full bg-white border border-[#E0E4EC] rounded-xl px-4 py-3 outline-none focus:border-[#FDC435] transition-colors resize-none"
                ></textarea>
            </div>

            <div className="flex justify-end">
                <button className="bg-[#FDC435] text-[#25282B] font-semibold px-8 py-3 rounded-xl hover:bg-opacity-90 transition-all shadow-sm">
                    Send
                </button>
            </div>

        </section>
    );
}

export default FormulaireContact;