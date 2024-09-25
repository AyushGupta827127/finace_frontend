<template>
  <div class="p-6 space-y-4 max-w-full mx-auto">
    <div class="flex justify-center">
      <h2 class="text-xl lg:text-3xl headerTitle">
        Rent <span class="text-orange-500">Agreement</span>
      </h2>
    </div>

    <!-- Container for Content and Buttons -->
    <div
      class="relative bg-white p-4 rounded-lg shadow-lg border border-gray-300 max-w-4xl mx-auto h-[80vh] overflow-y-auto thin-scrollbar"
    >
      <div
        v-html="formattedContent"
        class="prose pt-16"
        ref="contentContainer"
      ></div>

      <!-- Button Container -->
      <div class="absolute top-4 right-4 flex space-x-2">
        <button
          @click="clearContent"
          class="text-black px-4 py-2 rounded hover:bg-gray-200 border-2 border-gray-400 transition"
        >
          Clear
        </button>
        <button
          @click="openPreviewModal"
          class="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-300 transition"
        >
          Preview
        </button>
        <button
          @click="toggleEdit"
          class="bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-900 transition"
        >
          {{ isEditing ? "Save" : "Edit" }}
        </button>
        <button
          @click="downloadPDF"
          class="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-400 transition"
        >
          Download
        </button>
      </div>
    </div>

    <!-- Modal for Sequential Input -->
    <div
      v-if="showEditModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <h2 class="text-lg font-semibold mb-4">
          {{ editableFields[currentFieldIndex]?.placeholder }}:
        </h2>

        <!-- Sequential Input Field -->
        <input
          v-model="currentInput"
          type="text"
          class="border p-2 w-full mb-4"
          :placeholder="editableFields[currentFieldIndex]?.placeholder"
        />

        <!-- Modal Buttons -->
        <div class="flex justify-between space-x-2">
          <button
            @click="submitField"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition"
          >
            Save and Continue
          </button>
        </div>

        <div class="flex justify-end mt-4 space-x-2">
          <button
            @click="closeEditModal"
            class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>

    <!-- Modal for Preview -->
    <div
      v-if="showPreview"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div
        class="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl relative h-[80%] overflow-y-auto thin-scrollbar mt-12"
      >
        <button
          class="absolute top-4 right-6 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          @click="closePreviewModal"
        >
          Close
        </button>
        <div v-html="formattedContent" class="prose"></div>
      </div>
    </div>
  </div>
</template>

<script>
import mammoth from "mammoth";

export default {
  data() {
    return {
      formattedContent: "",
      isEditing: false,
      showPreview: false,
      showEditModal: false,
      currentFieldIndex: 0,
      editableFields: [],
      currentInput: "",
      html2pdf: null,
    };
  },
  mounted() {
    this.loadDocxFile("/files/rent.docx");

    if (process.client) {
      import("html2pdf.js").then((module) => {
        this.html2pdf = module.default;
      });
    }
  },
  methods: {
    async loadDocxFile(filePath) {
      try {
        const response = await fetch(filePath);
        const arrayBuffer = await response.arrayBuffer();
        const result = await mammoth.convertToHtml({ arrayBuffer });
        this.formattedContent = this.makeContentEditable(result.value);
      } catch (error) {
        console.error("Error loading .docx file:", error);
      }
    },
    makeContentEditable(content) {
      this.editableFields = content.match(/\[(.*?)\]/g).map((field) => ({
        field: field,
        value: "",
        placeholder: field.slice(1, -1),
      }));

      return content.replace(/\[(.*?)\]/g, (match) => {
        const placeholder = match.slice(1, -1);
        return `<span class="editable">[${placeholder}]</span>`;
      });
    },
    toggleEdit() {
      this.isEditing = !this.isEditing;
      const firstUnfilledField = this.editableFields.findIndex(
        (field) => !field.value
      );
      this.currentFieldIndex =
        firstUnfilledField !== -1 ? firstUnfilledField : 0;
      this.currentInput =
        this.editableFields[this.currentFieldIndex]?.value || "";

      if (this.isEditing) {
        this.showEditModal = true;
      }
    },
    closeEditModal() {
      this.showEditModal = false;
      this.isEditing = false;
    },
    submitField() {
      if (this.currentInput) {
        this.editableFields[this.currentFieldIndex].value = this.currentInput;
        this.updateContent();

        if (this.currentFieldIndex < this.editableFields.length - 1) {
          this.currentFieldIndex++;
          this.currentInput =
            this.editableFields[this.currentFieldIndex].value || "";
        } else {
          this.saveContent();
          this.showEditModal = false;
        }
      }
    },
   // Other methods
  updateContent() {
    let updatedContent = this.formattedContent;

    this.editableFields.forEach((field) => {
      const placeholder = `<span class="editable">[${field.placeholder}]</span>`;
      const replacement = field.value
        ? `<span class="editable">${field.value}</span>`
        : placeholder; // Use the original placeholder if no value

      updatedContent = updatedContent.replace(
        new RegExp(placeholder.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&"), "g"),
        replacement
      );
    });

    this.formattedContent = updatedContent;
  },

    saveContent() {
      console.log("Content saved:", this.editableFields);
    },
    openPreviewModal() {
      this.showPreview = true;
    },
    closePreviewModal() {
      this.showPreview = false;
    },
    downloadPDF() {
      if (this.html2pdf) {
        const element = this.$refs.contentContainer;
        const opt = {
          margin: 10,
          filename: "rent-agreement.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        };
        this.html2pdf().from(element).set(opt).save();
      }
    },

    clearContent() {
      // Reset each field's value to an empty string
      this.editableFields.forEach((field) => {
        field.value = "";
      });

      // Reset the formatted content with empty placeholders
      this.formattedContent = this.formattedContent.replace(
        /<span class="editable">(.*?)<\/span>/g,
        (match) => {
          const placeholder = match.match(/\[(.*?)\]/);
          return placeholder
            ? `<span class="editable">[${placeholder[1]}]</span>`
            : match;
        }
      );
    },
  },
};
</script>

<style scoped>
.prose {
  @apply prose-lg;
}

.fixed.inset-0.bg-black.bg-opacity-50 {
  backdrop-filter: blur(5px);
}

input {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.5em;
  width: 100%;
}

@media (max-width: 768px) {
  .bg-white.p-6.rounded-lg.shadow-lg.w-full.max-w-md.relative {
    max-width: 90%;
  }
}
</style>
