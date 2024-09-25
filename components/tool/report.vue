<template>
  <div>
    <!-- Main Modal -->
    <div v-if="showModal" class="fixed inset-0 z-10 overflow-y-auto">
      <div
        class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
        </div>
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >​</span
        >
        <div
          class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <div class="mt-3 text-center sm:mt-5">
              <h3
                class="text-xl leading-6 font-semibold text-gray-900"
                id="modal-headline"
              >
                Report
              </h3>
              <div class="mt-4">
                <!-- Dropdown for report type -->
                <div class="flex justify-center mb-4">
                  <label class="mr-4 font-medium text-gray-700">
                    Report Type:
                    <select
                      v-model="reportType"
                      class="ml-2 p-2 border rounded-md"
                    >
                      <option value="yearly">Yearly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </label>
                </div>
                <!-- Report Table -->
                <div class="max-h-80 overflow-y-auto thin-scrollbar">
                  <table class="w-full text-left border-collapse">
                    <thead>
                      <tr>
                        <th
                          v-for="(header, index) in tableHeaders"
                          :key="index"
                          class="sticky top-0 bg-gray-100 text-gray-900 border-b-2 py-2"
                        >
                          {{ header }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(row, rowIndex) in reportData" :key="rowIndex">
                        <td
                          v-for="(cell, cellIndex) in row"
                          :key="cellIndex"
                          class="border-b py-2"
                        >
                          {{ cellIndex === 0 ? cell : formatNumber(cell) }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-6 flex justify-between">
            <button
              type="button"
              @click="closeModal"
              class="px-4 md:px-10 py-3 outline-btn"
            >
              Close
            </button>
            <div class="flex space-x-4">
              <button
                @click="openSharePopup('pdf')"
                class="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg"
              >
                Share as PDF
              </button>
              <button
                @click="openSharePopup('csv')"
                class="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg"
              >
                Share as CSV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Share Pop-up -->
    <div
      v-if="showSharePopup"
      class="fixed inset-0 z-20 flex items-center justify-center bg-gray-800 bg-opacity-50"
    >
      <div class="bg-white p-4 rounded-lg shadow-lg w-96">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Share via</h3>
        <div class="mb-4">
          <input
            type="radio"
            id="whatsapp"
            value="whatsapp"
            v-model="shareMethod"
          />
          <label for="whatsapp" class="ml-2">WhatsApp</label>
          <input
            type="radio"
            id="email"
            value="email"
            v-model="shareMethod"
            class="ml-4"
          />
          <label for="email" class="ml-2">Email</label>
        </div>
        <div v-if="shareMethod === 'whatsapp'" class="mb-4">
          <label
            for="country-code"
            class="block font-medium text-gray-700 mb-2"
            >Country Code</label
          >
          <select
            id="country-code"
            v-model="selectedCountryCode"
            class="w-full p-2 border rounded-md"
          >
            <option
              v-for="code in countryCodes"
              :key="code.code"
              :value="code.code"
            >
              {{ code.name }} ({{ code.code }})
            </option>
          </select>
        </div>
        <input
          v-model="receiverContact"
          type="text"
          :placeholder="
            shareMethod === 'whatsapp'
              ? 'Enter your phone number'
              : 'Enter your email address'
          "
          class="w-full p-2 border rounded-md mb-4"
        />
        <div class="flex space-x-2">
          <button
            @click="closeSharePopup"
            class="flex-1 px-4 py-2 bg-blue-950 hover:bg-blue-900 text-white font-bold rounded"
          >
            Cancel
          </button>
          <button
            @click="validateAndSendShare"
            class="flex-1 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Papa from "papaparse";

export default {
  props: {
    showModal: Boolean,
    tableHeaders: Array,
    yearlyReportData: Array,
    monthlyReportData: Array,
  },
  data() {
    return {
      showSharePopup: false,
      shareMethod: "email", // Default share method
      receiverContact: "",
      fileType: "pdf",
      reportType: "yearly", // Default report type
      selectedCountryCode: "+91", // Default country code
      countryCodes: [
        { name: "United States", code: "+1" },
        { name: "Canada", code: "+1" },
        { name: "United Kingdom", code: "+44" },
        { name: "Australia", code: "+61" },
        { name: "India", code: "+91" },
        { name: "Germany", code: "+49" },
        { name: "France", code: "+33" },
        { name: "Japan", code: "+81" },
        { name: "South Korea", code: "+82" },
        { name: "Brazil", code: "+55" },
        // Add more country codes as needed
      ],
    };
  },
  computed: {
    reportData() {
      return this.reportType === "yearly"
        ? this.yearlyReportData
        : this.monthlyReportData;
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    openSharePopup(type) {
      this.fileType = type;
      this.showSharePopup = true;
    },
    closeSharePopup() {
      this.showSharePopup = false;
      this.receiverContact = "";
    },
    validateAndSendShare() {
      if (this.shareMethod === "whatsapp" && !this.receiverContact) {
        alert("Please enter the receiver's phone number.");
        return;
      }
      if (this.shareMethod === "email" && !this.receiverContact) {
        alert("Please enter the receiver's email address.");
        return;
      }
      this.sendShare();
    },
    async sendShare() {
      if (this.shareMethod === "whatsapp") {
        await this.sendWhatsApp();
      } else if (this.shareMethod === "email") {
        await this.sendEmail();
      }
    },
    async sendWhatsApp() {
      const fullNumber = `${this.selectedCountryCode}${this.receiverContact}`;
      // Here you would include the logic to share the file via WhatsApp
      alert(
        `Sent ${this.fileType.toUpperCase()} via WhatsApp to ${fullNumber}`
      );
    },
    async sendEmail() {
      try {
        let fileurl = "";
        let filename = "";
        if (this.fileType === "pdf") {
          const { default: html2pdf } = await import("html2pdf.js");
          const reportContent = this.generateReportContent();
          const pdfBlob = await this.generatePDF(html2pdf, reportContent);
          // Convert PDF Blob to Base64
          const base64PDF = await this.convertBlobToBase64(pdfBlob);
          fileurl = `data:application/pdf;base64,${base64PDF}`;
          filename = "report.pdf";
        } else {
          // Generate the CSV Blob
          const csvBlob = this.generateCSV();

          // Convert CSV Blob to Base64
          const base64CSV = await this.convertBlobToBase64(csvBlob);
          fileurl = `data:text/csv;base64,${base64CSV}`;
          filename = "report.csv";
        }

        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: this.receiverContact,
            subject: "Report Data",
            text: `<h2>Report</h2></br><p style="font-weight: 500; font-size: 21px;">Find the report below.  </p>`,
            filename: filename,
            fileurl: fileurl,
          }),
        });

        if (response.ok) {
          alert("Report sent successfully!");
          this.closeSharePopup();
        } else {
          alert("Failed to send the report.");
        }
      } catch (error) {
        console.error("Error sending email:", error);
        alert("An error occurred while sending the email.");
      }
    },
    async sharePDF() {
      const { default: html2pdf } = await import("html2pdf.js");
      const reportContent = this.generateReportContent();
      const pdfBlob = await this.generatePDF(html2pdf, reportContent);

      const shareData = {
        title: "Report",
        text: "Please find the attached PDF report.",
        files: [new File([pdfBlob], "report.pdf", { type: "application/pdf" })],
      };

      if (navigator.canShare && navigator.canShare(shareData)) {
        try {
          await navigator.share(shareData);
          console.log("PDF shared successfully!");
        } catch (error) {
          console.error("Error sharing PDF:", error);
        }
      } else {
        console.warn("Sharing not supported on this device.");
      }
    },
    async shareCSV() {
      const csvBlob = this.generateCSV();

      const shareData = {
        title: "Report",
        text: "Please find the attached CSV report.",
        files: [new File([csvBlob], "report.csv", { type: "text/csv" })],
      };

      if (navigator.canShare && navigator.canShare(shareData)) {
        try {
          await navigator.share(shareData);
          console.log("CSV shared successfully!");
        } catch (error) {
          console.error("Error sharing CSV:", error);
        }
      } else {
        console.warn("Sharing not supported on this device.");
      }
    },
    generateReportContent() {
      let htmlContent = `<h3>Report</h3><table><thead><tr>`;
      this.tableHeaders.forEach((header) => {
        htmlContent += `<th>${header}</th>`;
      });
      htmlContent += `</tr></thead><tbody>`;
      this.reportData.forEach((row) => {
        htmlContent += `<tr>`;
        row.forEach((cell, cellIndex) => {
          htmlContent += `<td>${
            cellIndex === 0 ? cell : this.formatNumber(cell)
          }</td>`;
        });
        htmlContent += `</tr>`;
      });
      htmlContent += `</tbody></table>`;
      return htmlContent;
    },
    generatePDF(html2pdf, content) {
      return new Promise((resolve, reject) => {
        const opt = {
          margin: 1,
          filename: "report.pdf",
          html2canvas: { scale: 2 },
          jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        };
        html2pdf()
          .from(content)
          .set(opt)
          .outputPdf("blob")
          .then(resolve)
          .catch(reject);
      });
    },
    generateCSV() {
      const data = [this.tableHeaders, ...this.reportData];
      const csvContent = Papa.unparse(data);
      // Adding BOM for UTF-8 encoding
      return new Blob(["\uFEFF" + csvContent], {
        type: "text/csv;charset=utf-8;",
      });
    },
    formatNumber(value) {
      if (!value || value === "₹ 0.00") return "-";
      const hasSymbol = value.includes("₹");
      const numericValue = value.replace(/[^\d.]/g, "");
      const [integer, decimal] = numericValue.split(".");

      // Split the integer part into groups
      const lastThreeDigits = integer.slice(-3);
      const otherDigits = integer.slice(0, -3);
      const formattedInteger =
        otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
        (otherDigits ? "," : "") +
        lastThreeDigits;
      const formattedNumber = formattedInteger + (decimal ? `.${decimal}` : "");
      return hasSymbol ? `₹ ${formattedNumber}` : formattedNumber;
    },
    convertBlobToBase64(blob) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(",")[1]);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    },
  },
};
</script>
