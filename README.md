# ConstructAI

## Project Description

ConstructAI is a project that provides a comprehensive set of tools and functionalities for managing construction projects. It offers a modular structure, allowing users to handle various aspects of construction, including contracts, cost management, engineering, field operations, reports, resources, and safety.

**Main Functionalities:**

*   **Contract Management:** Handle contracts such as Letter of Intent, Lien Waivers, Prime Contracts, Subcontracts, and more.
*   **Cost Management:** Manage budgets, forecasts, change orders, and direct costs.
*   **Engineering:** Handle drawings, file explorer, RFIs, submittals, specifications and more.
*   **Field Operations:** Manage checklists, daily reports, photo libraries, and schedules.
*   **Reporting:** Generate module statistics and other relevant reports.
*   **Resource Management:** Handle cost codes, equipment rates, labor rates, and personnel.
*   **Safety:** Manage incident reports, inspections, and toolbox meetings.

## Project Structure Updates

The project structure has been updated to improve organization and maintainability. The main changes are as follows:

*   **Modular Design:** The code is now organized by `modules`, which can have a `list` view or a `form` view.
*   **`Section` Components:** Each `module`'s `list` view now renders a `Section` component. These components were created by moving the code of the old `page.tsx` files to `Section.tsx` files inside the `components` directory.
*   **`Form` Components:** Each `module`'s `form` view now renders a `Form` component. These components were created by moving the code of the old `form/page.tsx` files to `Form.tsx` files inside the `form/components` directory.
* **Modified `page.tsx` files:** Now they are used only to render the `Section.tsx` or `Form.tsx` files, depending if it's the `list` view or the `form` view.

To get started, navigate through the `src/app` directory to explore the different modules.
