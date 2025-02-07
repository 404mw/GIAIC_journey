import Navbar from "@/components/navbar";
import Head from "@/components/head";
import Footer from "@/components/footer";
import Service from "@/components/service";

export default function CheckOut() {
  return (
    <>
      <header>
      <nav>
        <Navbar />
      </nav>

      <Head title="Checkout"/>
      </header>

      <main className=" m-auto max-w-[1440px] flex flex-col md:flex-row gap-5 p-7 sm:p-12 md:p-15 lg:p-20">
        <form className=" w-full md:w-1/2 flex flex-col gap-4" action="">
            <h1 className=" text-3xl font-bold mb-5">Billing Details</h1>
            <label className=" text-xl mt-3" htmlFor="fname">First Name</label>
            <input className=" border text-lg p-3 rounded-lg" type="text" name="" id="fname" />

            <label className=" text-xl mt-3" htmlFor="lname">Last Name</label>
            <input className=" border text-lg p-3 rounded-lg" type="text" name="" id="lname" />

            <label className=" text-xl mt-3" htmlFor="company">Company Name (optional)</label>
            <input className=" border text-lg p-3 rounded-lg" type="text" name="" id="company" />

            <label className=" text-xl mt-3" htmlFor="country">Country / Region</label>
            <select className=" border text-lg p-3 rounded-lg" name="" id="country" required>
                <option value=""></option>
                <option value="">Denmark</option>
                <option value="">Austria</option>
                <option value="">Germany</option>
                <option value="">Poland</option>
                <option value="">England</option>
            </select>

            <label className=" text-xl mt-3" htmlFor="street">Street Address</label>
            <input className=" border text-lg p-3 rounded-lg" type="text" name="" id="street" />

            <label className=" text-xl mt-3" htmlFor="town">Town / City</label>
            <input className=" border text-lg p-3 rounded-lg" type="text" name="" id="town" />

            <label className=" text-xl mt-3" htmlFor="province">Province</label>
            <select className=" border text-lg p-3 rounded-lg" name="" id="province">
                <option value="">Option 1</option>
                <option value="">Option 2</option>
                <option value="">Option 3</option>
                <option value="">Option 4</option>
                <option value="">Option 5</option>
            </select>

            <label className=" text-xl mt-3" htmlFor="zip">Zip Code</label>
            <input className=" border text-lg p-3 rounded-lg" type="tel" name="" id="zip" />

            <label className=" text-xl mt-3" htmlFor="phone">Phone</label>
            <input className=" border text-lg p-3 rounded-lg" type="tel" name="" id="phone" />

            <label className=" text-xl mt-3" htmlFor="mail">Email address</label>
            <input className=" border text-lg p-3 rounded-lg" type="email" name="" id="mail" />

        </form>

        <div className=" w-full md:w-1/2 flex flex-col p-3 sm:p-12 md:p-15 lg:p-20">
            <div className=" grid grid-cols-2 gap-3 border-b pb-8">
                <h1 className=" text-xl md:text-2xl">Product</h1>
                <h1 className=" text-end text-xl md:text-2xl">Subtotal</h1>
                <p className=" text-sm md:text-lg"><span className=" text-gray-400">Asgaard Sofa </span>X 1</p>
                <p className=" text-end text-sm md:text-lg">999.00 USD</p>
                <p className=" text-sm md:text-lg">subtotal</p>
                <p className=" text-end text-sm md:text-lg">999.00 USD</p>
                <p className=" text-sm md:text-lg">Total</p>
                <h1 className=" text-end text-lg md:text-xl text-[#B88E2F] font-bold">999.00 USD</h1>
            </div>
            <div className=" pt-8">
                <input type="radio" name="checkout" id="r1" />
                <label className=" pl-2" htmlFor="r1">Direct Bank Transfer</label>
                <p className=" text-gray-400 pt-3">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p><br />

                <input type="radio" name="checkout" id="r2" />
                <label className=" text-gray-400 pl-2" htmlFor="r2">Direct Bank Transfer</label><br />
                
                <input type="radio" name="checkout" id="r3" />
                <label className=" text-gray-400 pl-2" htmlFor="r3">Cash On Delievery</label><br /><br />

                <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className=" font-bold">privacy policy</span>.</p>
            </div>
        </div>

      </main>
      
      <Service />
      <Footer />
    </>
  );
}
