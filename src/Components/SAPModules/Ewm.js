import React, { useState } from 'react';
import headerImage from '../images/header.jpg';
import sapEwmImage from '../images/sap-ewm.jpg';
import storage from '../images/Storage.jpg';  // Make sure this path is correct
 
function Ewm() {
  const [activeInfoIndex, setActiveInfoIndex] = useState(null);
  const [activeTab, setActiveTab] = useState(null);
 
  const handlePlusButtonClick = (index, e) => {
    e.stopPropagation();
    setActiveInfoIndex(activeInfoIndex === index ? null : index);
  };
 
  const accordionItems = [
    {
      title: 'Storage Structure',
      info: (
        <div className="panel" style={{ maxHeight: '310px' }} >
          <div className="container-fluid" >
            <div className="flex flex-col lg:flex-row">
              {/* Text on the left */}
              <div className="flex-1 text-sm">
                <p>
                  SAP EWM provides the ability to define and map the physical layout of your warehouse and logistics center in the system as detailed as you need.
                </p><br />
                <p>
                  It depicts the individual storage facilities (High Bay warehouse, small part warehouse, bulk storage, picking, etc.) as storage types and summarizes them under a warehouse number.
                  For each storage type, storage locations can then be created. With SAP EWM, your stock information can be managed at the storage location level for all products.
                </p>
              </div>
 
              {/* Image on the right */}
              <div className="flex-1">
                <img
                  src={storage} // Image path
                  alt="Storage Structure"
                  loading="lazy"
                  className="ml-2 w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Handling Units',
      info: (
        <div className="panel" style={{ maxHeight: '310px', overflow: 'hidden', padding: '16px' }}>
          <div className="container-fluid">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Left Section */}
              <div className="flex-1 text-sm">
                <p>
                  A handling unit is a physical unit of packaging materials (load carrier/packaging material) and the goods contained on/in it. A handling unit always consists of products and packages. All information contained in the product positions e.g. about batches is always available through the handling unit.
                  <br />
                  <br />
                  Handling units are freely nestable and it is possible to reconstitute a new handling unit from several handling units.
                  <br />
                  <br />
                  A handling unit has a unique, scannable identification number that you can form in accordance with a standard such as EAN 128 or SSCC.
                  <br />
                  <br />
                  The header data of a handling unit is divided as follows:
                </p>
                <br />
 
                {/* Buttons Section */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <button
                    onClick={() => setActiveTab(1)}
                    className={`px-4 py-2 ${activeTab === 1 ? 'border-b-2 border-[#f57e20] text-[#f57e20]' : 'text-gray-600'}`}
                  >
                    Benefits
                  </button>
                </div>
              </div>
 
              {/* Right Section */}
              <div className="flex-1 text-sm">
                <p>
                  A handling unit can, for example, be constructed as follows:
                </p>
                <br />
                <p>
                  A handling unit consists of a handling unit header and handling unit items. It is given a unique number to identify them.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Batch Management',
      info: 'This process tracks and manages products using batches for quality and traceability purposes.',
    },
    {
      title: 'Serial number handling',
      info: 'Serial number handling enables tracking of individual items through unique identifiers, essential for high-value goods and regulatory compliance.',
    },
    {
      title: 'Goods receipt with Quality Inspection',
      info: 'This process ensures incoming materials meet quality standards through systematic inspection procedures.',
    },
    {
      title: 'Deconsolidation',
      info: 'Deconsolidation helps break down larger shipping units into smaller ones for efficient storage and processing.',
    },
    {
      title: 'Storage Strategies',
      info: 'Storage Strategies determine optimal placement of goods in the warehouse based on various parameters and business rules.',
    },
    {
      title: 'Retrieval Strategies',
      info: 'Retrieval Strategies optimize how goods are picked from storage locations based on various factors like FIFO, LIFO, or custom rules.',
    },
    {
      title: 'Production supply',
      info: 'Production supply manages the flow of materials to production areas, ensuring timely availability of required components.',
    },
    {
      title: 'Goods Issue',
      info: 'Goods Issue handles the process of materials leaving the warehouse, including documentation and inventory updates.',
    },
    {
      title: 'Wave Management',
      info: (
        <div className="panel" style={{ maxHeight: '310px' }} >
          <div className="container-fluid" >
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 text-sm">
                <p>With the SAP EWM functional element "picking" it is possible to group picking tasks.</p><br />
                <p>This means that work packages can be formed in the warehouse for fine-tuning of the picking. These work packages are processed together in subsequent processes (e.g.: production of all picking orders for a picking wave, at any given time).</p><br />
                <p>There are also additional criteria such as activity areas, routes, warehouse request items or split items for optimizing the picking process.</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Picking',
      info: 'Picking processes handle the selection and retrieval of items from storage locations to fulfill orders.',
    },
    {
      title: 'Pick Pack',
      info: 'Pick Pack combines picking and packing operations for streamlined order processing.',
    },
    {
      title: 'Pick-by-voice',
      info: 'Pick-by-voice enables hands-free, voice-directed picking operations for improved efficiency and accuracy.',
    },
    {
      title: 'Catch Weight',
      info: 'Catch Weight management handles products where the actual weight varies from the standard weight.',
    },
    {
      title: 'Packaging at work centers',
      info: 'Manages packaging operations at specific work centers within the warehouse.',
    },
    {
      title: 'Kit and set formation',
      info: 'Handles the assembly of different items into kits or sets according to specific requirements.',
    },
    {
      title: 'Value added Services',
      info: (
        <div className="panel" style={{ maxHeight: '310px' }} >
          <div className="container-fluid" >
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 text-sm">
                <p>Value-added services are additional services in logistics, such as assembly, labelling, packing and kitting, and can be executed in the warehouse via the corresponding orders. The order informs the employee in the warehouse about the service that should be rendered for a particular product. In the process, two entities are linked together: the delivery item, which specifies the number of services to be rendered, and the packaging specification, which contains the exact work instructions. The auxiliary products necessary for the service are also specified in the order.</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Consolidation',
      info: 'Consolidation combines multiple items or orders for efficient shipping and handling.',
    },
    {
      title: 'Loading/Dispatch',
      info: 'Manages the final stages of warehouse operations where goods are prepared and loaded for shipping.',
    },
    {
      title: 'Task Optimization',
      info: (
        <div className="panel" style={{ maxHeight: '310px' }} >
          <div className="container-fluid" >
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 text-sm">
                <p>Resource management of SAP EWM optimizes the selection of warehouse orders, and provides you with support for optimizing the management and distribution of tasks by creating queues. The assignment of resources to queues enables the targeted management and distribution of warehouse tasks. Tasks can be assigned to an available resource either automatically or manually. In the process, a series of factors are taken into account, such as the latest start date, execution priorities, assigned queues and qualification of the resources and warehouse order status.</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Resource Management',
      info: 'Manages warehouse resources including personnel, equipment, and storage space.',
    },
    {
      title: 'Slotting',
      info: (
        <div className="panel" style={{ maxHeight: '310px' }} >
          <div className="container-fluid" >
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 text-sm">
                <p>Slotting ensures optimal placement of products in the warehouse. It involves organizing inventory according to product size, demand, and other relevant factors to improve picking efficiency. In SAP EWM, slotting optimizes storage space, reduces travel time, and increases warehouse throughput.</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
 
  return (
    <>
      {/* Header Section */}
      <section className="relative">
        <div
          className="bg-cover bg-center bg-no-repeat h-[250px] md:h-[300px] lg:h-[350px]"
          style={{ backgroundImage: `url(${headerImage})` }}
        >
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="text-center py-8">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">SAP EWM</h2>
            </div>
          </div>
        </div>
      </section>
 
      {/* Main Content Section */}
      <div className="container mx-auto pb-5 mt-8 px-4 md:px-8 lg:px-36">
        <div className="flex flex-wrap">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
            <div className="text-center lg:text-left">
              <div className="inline-block mb-4">
                <span className="text-xl lg:text-2xl font-bold text-orange-400">
                  <span className="text-green-500 text-4xl font-extrabold">:</span> SAP EWM
                </span>
              </div>
            </div>
            <p className="leading-relaxed mt-4 text-sm lg:text-base">
              SAP Extended Warehouse Management (SAP EWM) forms part of SAP supply chain Management (SAP SCM) and provides end to end support for supply chain processes.
              SAP EWM brings together maximum functionality and comprehensive process support for all types of warehouses, and is one of the most powerful software suites for warehouse management.
            </p>
            <p className="leading-relaxed mt-4 text-sm lg:text-base">
              The principal components within SAP EWM include warehouse management (SAP EWM) and material flow control (SAP Material Flow System).
            </p>
            <p className="leading-relaxed mt-4 text-sm lg:text-base">
              SAP EWM provides comprehensive functionality for warehouse processes, helping companies reduce inventory costs while improving service quality.
            </p>
          </div>
 
          {/* Image Section */}
          <div className="w-full lg:w-1/2 px-4 flex justify-center lg:justify-end">
            <img
              src={sapEwmImage}
              alt="SAP EWM"
              className="max-w-2xl w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
 
      {/* Accordion Section */}
      <div className="container mx-auto pb-5">
        <div className="flex flex-wrap justify-center px-4 md:px-8 lg:px-36">
          <div className="w-full lg:flex flex-col items-center">
            {accordionItems.map((item, index) => (
              <div key={index} className="mb-4 w-full">
                <div className="relative bg-orange-400 rounded-md shadow-lg">
                  {/* Static Box (Heading) */}
                  <div className="px-4 py-6 text-white text-sm lg:text-base">{item.title}</div>
 
                  {/* Plus/Minus Symbol */}
                  <span
                    onClick={(e) => handlePlusButtonClick(index, e)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-2xl cursor-pointer"
                  >
                    {activeInfoIndex === index ? '−' : '+'}
                  </span>
                </div>
 
                {/* Info Content - Only shown when plus is clicked */}
                {activeInfoIndex === index && (
                  <div className="mt-2 bg-gray-100 p-4 rounded-lg shadow">
                    <p className="text-sm lg:text-base">{item.info}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
 
export default Ewm;