<template>
  <footer class="text-slate-500 bg-orange-50">
    <!-- Main footer -->
    <div class="py-8 md:px-28 px-4">
      <div class="w-full mx-auto">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <nav class="col-span-1 flex flex-col gap-8" aria-labelledby="footer-about-3">
            <a href="/" class="mt-4">
              <layoutBrandLogo />
            </a>
            <div class="flex gap-4">
              <nuxt-link href="mailto:info@finaceindia.com" target="_blank">
                  <nuxt-icon name="mail" class="text-xl"/>
              </nuxt-link>
              <nuxt-link href="tel:9431204044" target="_blank">
                  <nuxt-icon name="phone" class="text-xl" />
              </nuxt-link>
              <nuxt-link href="https://wa.me/9431204044" target="_blank">
                  <nuxt-icon name="whatsapp" class="text-xl" />
              </nuxt-link>
              <nuxt-link href="https://maps.app.goo.gl/xVzxMDDWd2mEvy9g6" target="_blank">
                  <nuxt-icon name="pin" class="text-xl" />
              </nuxt-link>
            </div>
          </nav>
          <nav class="col-span-1" aria-labelledby="footer-about-3">
            <h3 class="mb-6 text-base font-medium text-slate-700 mt-4" id="footer-about-3">Who We Are</h3>
            <ul class="ml-4">
              <li class="mb-1 leading-4">
                <span style="margin-right: 10px">&#11166; </span><nuxt-link href="/company/about" class="transition-colors duration-300 hover:text-blue-900 focus:text-blue-900">About</nuxt-link>
              </li>
              <li class="mb-1 leading-4">
                <span style="margin-right: 10px">&#11166; </span><nuxt-link href="#" class="transition-colors duration-300 hover:text-blue-900 focus:text-blue-900">People</nuxt-link>
              </li>
              <li class="mb-1 leading-4">
                <span style="margin-right: 10px">&#11166; </span><nuxt-link href="#" class="transition-colors duration-300 hover:text-blue-900 focus:text-blue-900">Clients</nuxt-link>
              </li>
              <li class="mb-1 leading-4">
                <span style="margin-right: 10px">&#11166; </span><nuxt-link href="/company/contact" class="transition-colors duration-300 hover:text-blue-900 focus:text-blue-900">Contact</nuxt-link>
              </li>
              <li class="mb-1 leading-4">
                <span style="margin-right: 10px">&#11166; </span><nuxt-link href="/services/shop-proprietorship-registration" class="transition-colors duration-300 hover:text-blue-900 focus:text-blue-900">Company Policy</nuxt-link>
              </li>
              <li class="mb-1 leading-4">
                <span style="margin-right: 10px">&#11166; </span><nuxt-link href="/resources/blogs" class="transition-colors duration-300 hover:text-blue-900 focus:text-blue-900">Blogs</nuxt-link>
              </li>
              <li class="mb-1 leading-4">
                <span style="margin-right: 10px">&#11166; </span><nuxt-link href="/resources/faq" class="transition-colors duration-300 hover:text-blue-900 focus:text-blue-900">FAQ</nuxt-link>
              </li>
              <li class="mb-1 leading-4">
                <span style="margin-right: 10px">&#11166; </span><nuxt-link href="#" class="transition-colors duration-300 hover:text-blue-900 focus:text-blue-900">Empanelment</nuxt-link>
              </li>
              <li class="mb-1 leading-4">
                <span style="margin-right: 10px">&#11166; </span><nuxt-link href="#" class="transition-colors duration-300 hover:text-blue-900 focus:text-blue-900">Recognition</nuxt-link>
              </li>
            </ul>
          </nav>
          <nav class="col-span-1" aria-labelledby="footer-about-3">
            <h3 class="mb-6 text-base font-medium text-slate-700 mt-4" id="footer-about-3">What We Do</h3>
            <ul class="ml-4">
              <li class="mb-1 leading-4">
                <span style="margin-right: 10px">&#11166; </span><nuxt-link href="/services/private-limited-company" class="transition-colors duration-300 hover:text-blue-900 focus:text-blue-900">Private Limited Company</nuxt-link>
              </li>
              <li class="mb-1 leading-4">
                <span style="margin-right: 10px">&#11166; </span><nuxt-link href="/services/limited-liability-partnership-(llp)" class="transition-colors duration-300 hover:text-blue-900 focus:text-blue-900">Limited Liability Partnership (LLP)</nuxt-link>
              </li>
              <li class="mb-1 leading-4">
                <span style="margin-right: 10px">&#11166; </span><nuxt-link href="/services/statutory-audit" class="transition-colors duration-300 hover:text-blue-900 focus:text-blue-900">Statutory Audit</nuxt-link>
              </li>
              <li class="mb-1 leading-4">
                <span style="margin-right: 10px">&#11166; </span><nuxt-link href="/services/itr-1" class="transition-colors duration-300 hover:text-blue-900 focus:text-blue-900">Income Tax Returns</nuxt-link>
              </li>
              <li class="mb-1 leading-4">
                <span style="margin-right: 10px">&#11166; </span><nuxt-link href="/services/gst-registration" class="transition-colors duration-300 hover:text-blue-900 focus:text-blue-900">Goods and Service Tax</nuxt-link>
              </li>
              <li class="mb-1 leading-4">
                <span style="margin-right: 10px">&#11166; </span><nuxt-link href="/services/startup-india-registration" class="transition-colors duration-300 hover:text-blue-900 focus:text-blue-900">Startup India Registration</nuxt-link>
              </li>
              <li class="mb-1 leading-4">
                <span style="margin-right: 10px">&#11166; </span><nuxt-link href="/services/registration" class="transition-colors duration-300 hover:text-blue-900 focus:text-blue-900">FSSAI</nuxt-link>
              </li>
              <li class="mb-1 leading-4">
                <span style="margin-right: 10px">&#11166; </span><nuxt-link href="/services/digital-signature" class="transition-colors duration-300 hover:text-blue-900 focus:text-blue-900">Digital Signature</nuxt-link>
              </li>
              <li class="mb-1 leading-4">
                <span style="margin-right: 10px">&#11166; </span><nuxt-link href="/services/msme---udyami-registration" class="transition-colors duration-300 hover:text-blue-900 focus:text-blue-900">MSME / Udyami Registration</nuxt-link>
              </li>
            </ul>
          </nav>
          <nav class="col-span-1" aria-labelledby="footer-get-in-touch-3">
            <h3 class="mb-6 text-base font-medium text-slate-700 mt-4" id="footer-get-in-touch-3">Knowledge Base</h3>
            <ul class="ml-4">
              <li class="mb-1 leading-4">
                <span style="margin-right: 10px">&#11166; </span><nuxt-link href="/resources/tools/emi-calculator" class="transition-colors duration-300 hover:text-blue-900 focus:text-blue-900">EMI Calculator</nuxt-link>
              </li>
              <li class="mb-1 leading-4">
                <span style="margin-right: 10px">&#11166; </span><nuxt-link href="/resources/tools/sip-calculator" class="transition-colors duration-300 hover:text-blue-900 focus:text-blue-900">SIP Calculator</nuxt-link>
              </li>
              <li class="mb-1 leading-4">
                <span style="margin-right: 10px">&#11166; </span><nuxt-link href="/resources/tools/income-tax-calculator" class="transition-colors duration-300 hover:text-blue-900 focus:text-blue-900">Income Tax Calculator</nuxt-link>
              </li>
              <li class="mb-1 leading-4">
                <span style="margin-right: 10px">&#11166; </span><nuxt-link href="/resources/tools/ppf-calculator" class="transition-colors duration-300 hover:text-blue-900 focus:text-blue-900">PPF Calculator</nuxt-link>
              </li>
              <li class="mb-2 leading-4">
                <span style="margin-right: 10px">&#11166; </span><nuxt-link href="/resources/tools/hra-calculator" class="transition-colors duration-300 hover:text-blue-900 focus:text-blue-900">HRA Calculator</nuxt-link>
              </li>
              <li class="mb-1 leading-4">
                <span style="margin-right: 10px">&#11166; </span><nuxt-link href="/resources/rent-agreement" class="transition-colors duration-300 hover:text-blue-900 focus:text-blue-900">Rent Agreement</nuxt-link>
              </li>
              <li class="mb-1 leading-4">
                <span style="margin-right: 10px">&#11166; </span><nuxt-link href="/resources/board-resulation-for-gst-application" class="transition-colors duration-300 hover:text-blue-900 focus:text-blue-900">Board Resulation for GST Application</nuxt-link>
              </li>
              <li class="mb-1 leading-4">
                <span style="margin-right: 10px">&#11166; </span><nuxt-link href="/resources/partnership-agreement" class="transition-colors duration-300 hover:text-blue-900 focus:text-blue-900">Partnership Agreement</nuxt-link>
              </li>
              <li class="mb-1 leading-4">
                <span style="margin-right: 10px">&#11166; </span><nuxt-link href="/resources/invoice" class="transition-colors duration-300 hover:text-blue-900 focus:text-blue-900">Invoice</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <!-- Secondary Footer -->
    <div class="bg-orange-600 text-white px-4 md:px-28 py-4 flex flex-col md:flex-row justify-between items-center text-xs">
      <div class="flex gap-1 mb-4 md:mb-0">
        <nuxt-link href="#" target="_blank" class="transition-colors duration-300 hover:text-gray-50 focus:text-gray-50 text-nowrap">Sitemap</nuxt-link>
        |
        <nuxt-link href="#" target="_blank" class="transition-colors duration-300 hover:text-gray-50 focus:text-gray-50 text-nowrap">Terms & Conditions</nuxt-link>
        |
        <nuxt-link href="#" target="_blank" class="transition-colors duration-300 hover:text-gray-50 focus:text-gray-50 text-nowrap">Privacy Policy</nuxt-link>
      </div>
      <span class="text-justify">&copy; {{ new Date().getFullYear() }} Finace India. All Rights Reserved</span>
      <div class="flex gap-4 mt-4 md:mt-0">
        <nuxt-link href="mailto:finaceindiaservices@gmail.com" target="_blank">
          <nuxt-icon name="mail" class="text-xl" />
        </nuxt-link>
        <nuxt-link href="tel:9431204044" target="_blank">
          <nuxt-icon name="phone" class="text-xl" />
        </nuxt-link>
        <nuxt-link href="https://wa.me/9431204044" target="_blank">
          <nuxt-icon name="whatsapp" class="text-xl" />
        </nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>