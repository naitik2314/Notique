import React from 'react';
import { XIcon, SparklesIcon, ArrowRightIcon } from 'lucide-react';
const AIAssistant: React.FC = () => {
  return <div className="border-t border-gray-200 bg-white p-4 shadow-lg">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
              <SparklesIcon size={16} className="text-indigo-600" />
            </div>
            <h3 className="font-medium text-gray-800">AI Assistant</h3>
          </div>
          <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500">
            <XIcon size={16} />
          </button>
        </div>
        <div className="space-y-4 max-h-[40vh] md:max-h-48 overflow-auto">
          <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
            <h4 className="text-sm font-medium text-indigo-800 mb-2">
              Schedule Optimization
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              I've noticed you have 3 high-priority tasks due today but only 2
              hours of free time. Would you like me to suggest a more optimal
              schedule?
            </p>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1.5 bg-indigo-500 text-white text-sm rounded-md hover:bg-indigo-600 transition-colors">
                Optimize Schedule
              </button>
              <button className="px-3 py-1.5 text-gray-500 text-sm hover:bg-gray-100 rounded-md">
                Ignore
              </button>
            </div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-800 mb-2">
              Task Automation
            </h4>
            <p className="text-sm text-gray-700">
              You create similar meeting notes every Tuesday. Would you like me
              to automatically create a template for you?
            </p>
            <div className="flex items-center gap-2 mt-3">
              <button className="flex items-center gap-1 text-indigo-600 text-sm hover:underline">
                <span>Set up automation</span>
                <ArrowRightIcon size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default AIAssistant;