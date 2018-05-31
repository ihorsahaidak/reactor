<?php
namespace Reactor\Spa\Controller\Cms;

use Magento\Catalog\Model\ResourceModel\Category\CollectionFactory;
use Magento\Framework\App\Action\Context;
use Magento\Framework\Controller\Result\JsonFactory;
use Magento\Framework\View\Result\PageFactory;
use Magento\Framework\App\Action\Action;
use Magento\Catalog\Helper\Category;

class Index extends Action
{
    /**
     * @var PageFactory
     */
    protected $pageFactory;
    /**
     * @var JsonFactory
     */
    protected $jsonFactory;
    /**
     * @var CollectionFactory
     */
    private $categoryCollectionFactory;
    /**
     * @var \Magento\Catalog\Helper\Category
     */
    private $categoryHelper;

    public function __construct(
        PageFactory $pageFactory,
        JsonFactory $jsonFactory,
        CollectionFactory $categoryCollectionFactory,
        Category $categoryHelper,
        Context $context
    )
    {
        parent::__construct($context);
        $this->pageFactory = $pageFactory;
        $this->jsonFactory = $jsonFactory;
        $this->categoryCollectionFactory = $categoryCollectionFactory;
        $this->categoryHelper = $categoryHelper;
    }

    public function execute()
    {
        $jsonPage = $this->jsonFactory->create();

        $response = [];

        /** @var \Magento\Framework\Data\Tree\Node\Collection $test */
        $test = $this->categoryHelper->getStoreCategories('position');

        /** @var \Magento\Framework\Data\Tree\Node $node */
        foreach ($test->getNodes() as $node) {
            $this->processCategory($response['categories'], $node);
        }

        return $jsonPage->setData($response);
    }

    protected function processCategory(&$categories, \Magento\Framework\Data\Tree\Node $node)
    {
        $category = $node->getData();
        $category['children'] = [];

        if ($node->getChildren()->count()) {
            foreach ($node->getChildren() as $childNode) {
                $this->processCategory($category['children'], $childNode);
            }
        }
        $categories[] = $category;
    }
}
