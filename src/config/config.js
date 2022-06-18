export const form = [
  {
    "type": "information",
    "label": "",
    "name": "info",
    "text": `We would like to know more about you and your current <strong>situation</strong>.`,
    "buttonText": "Okay, cool!",
  },
  {
    "type": "radio",
    "label": "Study Option",
    "name": "studyOption",
    "buttonText": "What's on?",
    "options": {
      "choices": [
        "Full-time",
        "Part-time",
        "Distant"
      ]
    },
    "validation": {
      required: true,
    }
  },
  {
    "type": "checkbox",
    "label": "Courses",
    "name": "courses",
    "buttonText": "Okay, cool!",
    "options": {
      "choices": [
        "Project Management",
        "Business Analysis",
        "Product Management"
      ]
    },
    "validation": {
      required: true,
      minLength: 2
    }
  },
  {
    "type": "text",
    "label": "First Name",
    "name": "firstName",
    "buttonText": "Next...",
    "options": {
      "attrs": {
        "placeholder": "First Name"
      }
    },
    "validation": {
      required: true,
      minLength: 5
    }
  },
  {
    "type": "text",
    "label": "Last Name",
    "name": "lastName",
    "buttonText": "What do we call you?",
    "options": {
      "attrs": {
        "placeholder": "Last Name"
      }
    },
    "validation": {
      required: false,
      minLength: 5
    }
  },
  {
    "type": "information",
    "label": "",
    "name": "info",
    "text": `Now, tell us how do we get in touch with you.`,
    "buttonText": "Okay, cool!",
  },
  {
    "type": "text",
    "label": "Your Email",
    "name": "email",
    "buttonText": "Let's do this!",
    "options": {
      "attrs": {
        "placeholder": "Your Email"
      }
    },
    "validation": {
      required: true,
      email: true
    }
  },
  {
    "type": "text",
    "label": "Your phone Number",
    "name": "phone",
    "buttonText": "Okay. Next!",
    "options": {
      "attrs": {
        "placeholder": "Your Contact"
      }
    },
    "validation": {
      required: true,
      numeric: true
    }
  },
  {
    "type": "textarea",
    "label": "Tell us why do you want to study with us?",
    "name": "message",
    "buttonText": "I'm done now.",
    "options": {
      "attrs": {
        "placeholder": "Write here..."
      }
    },
    "validation": {
      required: false
    }
  },
]

export default {
  form
}