# MarketMatch Ag

## Project Overview
MarketMatch Ag is a WhatsApp-based agricultural marketplace platform that connects smallholder farmers and cooperatives directly with buyers. The platform eliminates middlemen, ensures fair pricing, reduces spoilage, and streamlines the entire produce marketing process through WhatsApp automation.

## Who It Is For
- **Smallholder Farmers**: Individual farmers looking to sell produce directly to buyers
- **Cooperatives**: Farmer groups and agricultural cooperatives wanting to automate sales and buyer coordination
- **NGOs & Aggregators**: Organizations facilitating market access for farmers
- **Buyers**: Wholesale and retail buyers seeking quality produce with transparent pricing

## Features
- **WhatsApp-First Interface**: Farmers post produce availability via WhatsApp messages
- **Automated Buyer Alerts**: Registered buyers receive instant notifications about available produce
- **Real-Time Pricing**: AI-powered pricing recommendations based on market trends
- **Direct Buyer Matching**: Automated matching between farmers and interested buyers
- **Sales Recording**: Automatic logging of transactions for record-keeping
- **Product Catalog**: Browse available products with images and WhatsApp ordering links
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## How to Set Up

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection
- WhatsApp account (for communication)

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/mujunibrian13-spec/MarketMatchAg1.git
   cd MarketMatchAg1
   ```

2. Open the website locally:
   - Simply open `index.html` in your web browser
   - Or use a local server for better experience:
     ```bash
     python -m http.server 8000
     # Then visit http://localhost:8000
     ```

3. To deploy to the web:
   - Upload files to your web hosting service
   - Ensure the `.htaccess` or server configuration supports static files

### Configuration
- **WhatsApp Number**: Update the WhatsApp phone number (currently +256773950550) in `script.js` and links
- **n8n Webhook**: Update the webhook URL in `script.js` for demo form submissions
- **Company Details**: Modify email address and contact info in `index.html` footer

## Technology Stack

### Frontend
- **HTML5**: Semantic markup and structure
- **CSS3**: Responsive design with media queries
- **Bootstrap 5**: UI framework for navigation and responsive components
- **JavaScript (Vanilla)**: Form handling and dynamic interactions
- **Images**: Product catalog with optimized images

### Backend Integration
- **n8n Automation**: Webhook-based automation for demo requests and email responses
- **Gemini AI API**: Generate automated email responses to inquiries
- **WhatsApp Business API**: Integration via wa.me links for direct messaging

### Deployment
- **GitHub Pages**: Version control and hosting
- **Static Site Hosting**: No server-side processing required

## Project Structure
```
MarketMatchAg1/
├── index.html              # Main website page
├── style.css               # Stylesheet
├── script.js               # JavaScript functionality
├── README.md               # Project documentation
├── images/                 # Product images folder
│   ├── logo-mma.png
│   ├── flow-diagram.png
│   ├── beans-fresh.jpg
│   ├── cabbage.jpg
│   └── ...
└── .git/                   # Git version control
```

## Key Sections

### 1. Header & Navigation
- Logo and branding
- Sticky navigation bar with quick links
- Call-to-action buttons (Demo, Chat, Pricing)

### 2. How It Works
- Visual flow diagram showing the WhatsApp automation process
- Problem statement and solutions
- Farmer posting capabilities
- Buyer alert system

### 3. Products Section
- 14 available agricultural products
- Product images with descriptions
- Direct WhatsApp ordering links for each product

### 4. Pricing
- Individual farmer pricing ($8/month)
- Small cooperative pricing ($300-$500/month)
- Mid-size cooperative pricing ($800-$1,200/month)
- Enterprise/NGO pricing ($1,500+/month)

### 5. Contact & Demo Request
- Contact form connected to n8n webhook
- Automatic email response generation using Gemini AI
- Contact information and WhatsApp link

## Responsive Design
- **Desktop**: Full width layout with multi-column grids
- **Tablet (768px - 1024px)**: 2-column product grid
- **Mobile (< 768px)**: Single-column layout, optimized touch targets

## API Integrations

### n8n Webhook
- URL: `https://n8n.srv939400.hstgr.cloud/webhook-test/5a44627f-14c6-4d23-bf08-9f1253b7118a`
- Method: POST
- Receives: name, email, message from demo request form
- Triggers: Automated email response generation

### Gemini AI
- Generates professional email responses to demo requests
- Uses structured prompts for consistent formatting

## WhatsApp Integration
- All product links use `wa.me/256773950550` format
- Direct messaging for inquiries and orders
- Pre-filled message templates for product interest

## Accessibility
- Semantic HTML structure
- ARIA labels for screen readers
- Keyboard navigation support
- Sufficient color contrast ratios

## Performance Optimization
- Optimized images in images/ folder
- Minimal external dependencies (Bootstrap 5 CDN)
- Lazy loading for product images
- Minified CSS and JavaScript

## Future Enhancements
- [ ] User authentication system
- [ ] Database integration for product inventory
- [ ] Payment gateway integration
- [ ] Mobile app (iOS/Android)
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] SMS notifications alongside WhatsApp

## Support & Contact
- **WhatsApp**: +256773950550
- **Email**: info@marketmatchag.com
- **GitHub**: https://github.com/mujunibrian13-spec/MarketMatchAg1

## License
MIT License - Feel free to use and modify for your agricultural marketing needs.

## Contributors
- Development Team: MarketMatch Ag
- Last Updated: February 2026

---

**Mission**: Empowering African smallholder farmers with fair market access and direct buyer connections through WhatsApp automation.
