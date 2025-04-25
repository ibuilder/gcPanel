# **App Name**: ConstructAI

## Core Features:

- Dashboard Overview: Dashboard displaying key construction metrics and project status at a glance.
- Document Management: Module to manage RFIs (Requests for Information), Submittals, and Daily Reports.
- AI-Powered Insights: Use the Gemini Pro tool to analyze project documentation and provide insights on potential risks, cost overruns, and schedule delays.

## Style Guidelines:

- Primary color: Light gray (#F5F5F5) for a clean, professional look.
- Secondary color: Dark blue (#214252) for headers and important elements.
- Accent: Teal (#26A69A) for interactive elements and highlights.
- Use a consistent grid system for all modules to maintain a uniform look and feel.
- Use a set of consistent icons throughout the dashboard for easy navigation.
- Subtle transitions and animations to improve user experience.

## Original User Request:
# PHPCM - Construction Management Dashboard

A modular construction management dashboard framework built with Flask, Bootstrap, and Supabase database integration with Google Gemini Pro AI capabilities.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [User Roles & Permissions](#user-roles--permissions)
- [Modules](#modules)
- [Module Development Guide](#module-development-guide)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## Overview

PHPCM (Project Hub for Construction Management) is a comprehensive construction management dashboard that provides a modular framework for implementing CRUD modules for various construction project-related processes. The system is designed to be lightweight, modular, and easily extensible, allowing users to add new modules as needed.

## Features

- **Modular Architecture**: Easily add, remove, or customize modules
- **Role-Based Access Control**: Five user roles with different permissions
- **Responsive UI**: Built with Bootstrap for optimal viewing on any device
- **CRUD Operations**: Create, Read, Update, Delete functionality across all modules
- **Document Management**: Upload, view, and manage project documents
- **Sortable & Filterable Tables**: Easy data navigation and management
- **PDF Export**: Export records to PDF format
- **Comments System**: Add comments to any record
- **Supabase Integration**: Robust database and authentication system
- **AI Assistance**: Google Gemini Pro integration for intelligent insights and automation

## Tech Stack

- **Backend**: Flask (Python)
- **Frontend**: HTML5, CSS3, JavaScript, Bootstrap 5
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **AI Integration**: Google Gemini Pro API
- **File Storage**: Supabase Storage
- **PDF Generation**: WeasyPrint

## System Architecture

The system follows a modular MVC (Model-View-Controller) architecture:

1. **Models**: Database models representing tables in Supabase
2. **Views**: HTML templates with Bootstrap styling
3. **Controllers**: Flask routes and business logic
4. **Services**: Reusable components for common functionality

Each module is self-contained with its own routes, templates, and business logic, making the system highly maintainable and extensible.

## Project Structure

```
phpcm/
├── app/
│   ├── __init__.py               # Flask application initialization
│   ├── config.py                 # Configuration settings
│   ├── supabase_client.py        # Supabase connection client
│   ├── gemini_client.py          # Google Gemini API client
│   ├── auth/                     # Authentication module
│   │   ├── __init__.py
│   │   ├── routes.py
│   │   ├── models.py
│   │   └── forms.py
│   ├── core/                     # Core functionality
│   │   ├── __init__.py
│   │   ├── models.py
│   │   ├── routes.py
│   │   └── utils.py
│   ├── modules/                  # CRUD modules
│   │   ├── __init__.py
│   │   ├── engineering/          # Engineering section modules
│   │   │   ├── __init__.py
│   │   │   ├── rfi/              # Request for Information module
│   │   │   │   ├── __init__.py
│   │   │   │   ├── routes.py
│   │   │   │   ├── forms.py
│   │   │   │   └── models.py
│   │   │   ├── submittals/       # Submittals module
│   │   │   │   └── ...
│   │   │   └── ...               # Other engineering modules
│   │   ├── field/                # Field section modules
│   │   │   └── ...
│   │   ├── safety/               # Safety section modules
│   │   │   └── ...
│   │   ├── contracts/            # Contracts section modules
│   │   │   └── ...
│   │   ├── cost/                 # Cost section modules
│   │   │   └── ...
│   │   ├── closeout/             # Closeout section modules
│   │   │   └── ...
│   │   ├── resources/            # Resources section modules
│   │   │   └── ...
│   │   ├── settings/             # Settings section modules
│   │   │   └── ...
│   │   └── reports/              # Reports section modules
│   │       └── ...
│   ├── static/                   # Static assets
│   │   ├── css/                  # CSS files
│   │   │   ├── bootstrap.min.css
│   │   │   └── custom.css
│   │   ├── js/                   # JavaScript files
│   │   │   ├── bootstrap.bundle.min.js
│   │   │   ├── jquery.min.js
│   │   │   └── custom.js
│   │   └── img/                  # Image files
│   └── templates/                # HTML templates
│       ├── base.html             # Base template with layout
│       ├── components/           # Reusable components
│       │   ├── header.html
│       │   ├── footer.html
│       │   ├── sidebar.html
│       │   └── navbar.html
│       ├── auth/                 # Authentication templates
│       │   ├── login.html
│       │   └── register.html
│       └── modules/              # Module templates
│           ├── engineering/
│           │   ├── rfi/
│           │   │   ├── list.html
│           │   │   ├── view.html
│           │   │   └── form.html
│           │   └── ...
│           └── ...
├── migrations/                   # Database migrations
├── tests/                        # Test suite
├── .env                          # Environment variables
├── .gitignore                    # Git ignore file
├── requirements.txt              # Python dependencies
├── wsgi.py                       # WSGI entry point
└── README.md                     # This documentation
```

## Installation & Setup

### Prerequisites

- Python 3.9+
- PostgreSQL (via Supabase)
- Google Gemini Pro API key

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/phpcm.git
   cd phpcm
   ```

2. Create and activate virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Set up a Supabase project:
   - Create an account at [Supabase](https://supabase.com/)
   - Create a new project
   - Get your project URL and API key

5. Set up Google Gemini Pro API:
   - Create an account at [Google AI Studio](https://ai.google.dev/)
   - Get your API key

6. Create a `.env` file with the following variables:
   ```
   FLASK_APP=wsgi.py
   FLASK_ENV=development
   SECRET_KEY=your-secret-key
   SUPABASE_URL=your-supabase-url
   SUPABASE_KEY=your-supabase-key
   GEMINI_API_KEY=your-gemini-api-key
   ```

7. Initialize the database:
   ```bash
   flask db init
   flask db migrate -m "Initial migration"
   flask db upgrade
   ```

8. Run the application:
   ```bash
   flask run
   ```

The application will be available at `http://localhost:5000`.

## User Roles & Permissions

PHPCM implements a role-based access control system with the following roles:

1. **Administrator**: Complete access (create/read/update/delete)
2. **Editor**: Can create, read, and update (create/read/update)
3. **Contributor**: Can create and read (create/read)
4. **Viewer**: Read-only access (read)
5. **Restricted**: No access

Users can only delete their own records. Each role has specific permissions for each module, configurable through the admin settings.

## Modules

PHPCM is organized into sections, each containing several modules:

### Engineering
- Request for Information (RFIs)
- Submittals
- Drawings
- Specifications
- File Explorer
- Permitting
- Meeting Agenda/Minutes
- Transmittals

### Field
- Daily Reports with weather
- Photo Library
- Schedule
- Checklists
- Punchlist
- Pull-Planning

### Safety
- Observations
- PreTask Plans (PTPs)
- Job Hazard Analysis (JHAs)
- Employee Orientations

### Contracts
- Prime Contract (GMP, Cost Plus, Lump Sum, CMAR)
- Subcontracts
- Professional Service Agreements
- Lien Waivers
- Certificates of Insurance
- Letters of Intent

### Cost
- Budget and Forecast
- Invoicing (AIA G702/G703)
- Direct Costs (Invoices, Certified Payroll, and Expenses)
- Potential Changes
- Change Orders
- Approval Letters & Directives
- Time and Materials Tickets

### Closeout
- O&M Manuals
- Warranties
- Attic Stock

### Resources
- Locations
- CSI Divisions
- Cost Codes
- Labor Rates
- Material Rates
- Equipment Rates

### Settings
- Project Info
- Company Management
- User Management
- Project Help
- Database Settings

### Reports
- Module statistics with PDF and CSV export

## Module Development Guide

Creating a new module is straightforward using the modular architecture. Follow these steps to create a custom module:

1. Create a new directory for your module inside the appropriate section
2. Implement the required files:
   - `__init__.py` - Module initialization
   - `routes.py` - Flask routes for CRUD operations
   - `models.py` - Database models
   - `forms.py` - Form definitions (optional)

3. Create the necessary templates:
   - `list.html` - List view of records
   - `view.html` - Detailed view of a record
   - `form.html` - Create/edit form

### Module Installation via ZIP

PHPCM supports module installation via ZIP files. A valid module ZIP should contain:

1. The module directory structure
2. A `manifest.json` file with module metadata
3. SQL scripts for required tables
4. Required templates and assets

Upload the ZIP file through the module management interface in the admin settings.

### Module Template

```python
# routes.py
from flask import Blueprint, render_template, request, redirect, url_for, flash
from app.auth.decorators import role_required
from app.core.utils import get_supabase_client
from .forms import MyModuleForm

module_bp = Blueprint('my_module', __name__, url_prefix='/my-module')

@module_bp.route('/')
@role_required(['administrator', 'editor', 'contributor', 'viewer'])
def list():
    supabase = get_supabase_client()
    data = supabase.table('my_module').select('*').execute()
    return render_template('modules/my_section/my_module/list.html', items=data['data'])

@module_bp.route('/view/<id>')
@role_required(['administrator', 'editor', 'contributor', 'viewer'])
def view(id):
    supabase = get_supabase_client()
    data = supabase.table('my_module').select('*').eq('id', id).execute()
    return render_template('modules/my_section/my_module/view.html', item=data['data'][0])

@module_bp.route('/create', methods=['GET', 'POST'])
@role_required(['administrator', 'editor', 'contributor'])
def create():
    form = MyModuleForm()
    if form.validate_on_submit():
        # Save data to Supabase
        supabase = get_supabase_client()
        data = {
            'name': form.name.data,
            'description': form.description.data,
            # Add other fields
        }
        result = supabase.table('my_module').insert(data).execute()
        flash('Record created successfully', 'success')
        return redirect(url_for('my_module.list'))
    return render_template('modules/my_section/my_module/form.html', form=form, action='create')

@module_bp.route('/edit/<id>', methods=['GET', 'POST'])
@role_required(['administrator', 'editor'])
def edit(id):
    supabase = get_supabase_client()
    data = supabase.table('my_module').select('*').eq('id', id).execute()
    item = data['data'][0]
    
    form = MyModuleForm(obj=item)
    if form.validate_on_submit():
        # Update data in Supabase
        data = {
            'name': form.name.data,
            'description': form.description.data,
            # Add other fields
        }
        result = supabase.table('my_module').update(data).eq('id', id).execute()
        flash('Record updated successfully', 'success')
        return redirect(url_for('my_module.view', id=id))
    return render_template('modules/my_section/my_module/form.html', form=form, item=item, action='edit')

@module_bp.route('/delete/<id>', methods=['POST'])
@role_required(['administrator'])
def delete(id):
    supabase = get_supabase_client()
    # Check if user owns this record
    # Delete record
    result = supabase.table('my_module').delete().eq('id', id).execute()
    flash('Record deleted successfully', 'success')
    return redirect(url_for('my_module.list'))
```

## API Documentation

PHPCM provides a RESTful API for each module with the following endpoints:

### Authentication

```
POST /api/auth/login
POST /api/auth/register
POST /api/auth/logout
GET /api/auth/user
```

### Module CRUD Operations

```
GET /api/{module}           # List all records
GET /api/{module}/{id}      # Get a specific record
POST /api/{module}          # Create a new record
PUT /api/{module}/{id}      # Update a record
DELETE /api/{module}/{id}   # Delete a record
```

### Comments

```
GET /api/comments/{module}/{record_id}   # Get comments for a record
POST /api/comments/{module}/{record_id}  # Add a comment to a record
```

### File Operations

```
POST /api/files/upload      # Upload a file
GET /api/files/{id}         # Download a file
DELETE /api/files/{id}      # Delete a file
```

## Database Schema

The database schema includes the following main tables:

1. **users** - User accounts
2. **companies** - Company information
3. **projects** - Project details
4. **modules** - Module registry
5. **role_permissions** - Role-based permissions
6. **comments** - User comments on records

Each module also has its own database tables following a similar structure.

## Google Gemini Pro Integration

PHPCM integrates Google Gemini Pro AI for intelligent features:

- Document analysis and summarization
- Project risk assessment
- Cost prediction and analysis
- Automated report generation
- Intelligent search across project documents
- Natural language queries for project data

To configure Gemini Pro integration:

1. Obtain a Google Gemini Pro API key
2. Add the key to your `.env` file as `GEMINI_API_KEY`
3. Enable Gemini features in the admin settings

## Contributing

We welcome contributions to PHPCM! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
  